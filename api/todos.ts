/*
 * Using Composition API  in Vue 2
 * https://github.com/vuejs/composition-api
 */

/**
 * Table creation SQL
 *
 CREATE TABLE todos (
  id varchar primary key  NOT NULL,
  text text,
  done boolean,
  created_at TIMESTAMP DEFAULT(now()) NOT NULL
 )
 */

import { reactive, set, computed } from 'vue'
import { nanoid } from 'nanoid'
import isequal from 'lodash.isequal'
import { supabase } from '~/plugins/supabase'

// Reactive 'global' variable
const todos = reactive({
  data: [],
  error: null,
  fetching: false
})
/**
 * == REALTIME ==
 * Listen for realtime changes
 */
supabase
  // ['*', 'tableName']
  .from('*')
  // [INSERT | UPDATE | DELETE | *]
  .on('*', (payload) => {
    // Check if the payload.new is in the todos.list
    // if yes, delete it. That means that it comes from outside
    if (payload.eventType === 'DELETE') {
      const deletedIdx = todos.data.findIndex(i => i.id === payload.old.id)
      deletedIdx !== -1 && todos.data.splice(deletedIdx, 1)
      return
    }

    // If the updated element is the same that the one existing in state,
    // do not update the local state
    let localIdx = todos.data.findIndex(i => i.id === payload.new.id)
    const eq = isequal(todos.data[localIdx], payload.new)
    if (eq) {
      return
    }
    localIdx = localIdx === -1 ? todos.data.length : localIdx
    set(todos.data, localIdx, payload.new)
  })
  .subscribe()

/**
 * Retrieve all todo for the signed in user
 */
const fetchTodos = async () => {
  try {
    todos.fetching = true
    const { data, count, error } = await supabase
      .from('todos')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: true })

    if (error) {
      console.log('error', error)
      return
    }
    todos.data = data
  } catch (err) {
    todos.error = err
    console.error('Error retrieving data from db', err)
  } finally {
    todos.fetching = false
  }
}
/**
 *  Add a new todo to supabase
 */
const addTodo = async (todoText) => {
  try {
    if (!todoText) {
      return
    }
    const now = new Date().toISOString().slice(0, -1)
    const todo = {
      id: nanoid(), // custom ID
      text: todoText,
      done: false,
      created_at: now
    }
    // Update local state
    todos.data.push(todo)

    // Save data in DB
    // Returns the new todo in case it's needed
    await supabase.from('todos').insert(todo).single()
  } catch (err) {
    console.error('Unknown problem inserting to db', err)
    // remove local todo in case of error
    return null
  }
}

const doneTodo = async (todo, index) => {
  try {
    // update current state (Optimistic UI)
    todos.data[index].done = !todo.done

    // Update database
    const { data, error } = await supabase
      .from('todos')
      .update({ done: todos.data[index].done })
      .match({ id: todo.id })
  } catch (e) {
    console.error(e)
  }
}

const removeTodo = async (todo, index) => {
  try {
    // update current state (Optimistic UI)
    todos.data.splice(index, 1)
    // Update database
    await supabase.from('todos').delete().match({ id: todo.id })
  } catch (e) {
    console.error(e)
  }
}
// Workaround for Vue2 to make this property readonly with composition API
// It is important to compute the reactive variables to make
// them readonly. In vue 3 this step is not necessary.
const todosData = computed(() => todos.data)
const todosFetching = computed(() => todos.fetching)
const todosError = computed(() => todos.error)

export {
  todosData,
  todosError,
  todosFetching,
  fetchTodos,
  addTodo,
  doneTodo,
  removeTodo
}
