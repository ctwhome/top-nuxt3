/*
 * Using Composition API  in Vue 2
 * https://github.com/vuejs/composition-api
 */

/**
 * Table creation SQL
 *
 CREATE TABLE software (
  id varchar primary key  NOT NULL,
  text text,
  done boolean,
  created_at TIMESTAMP DEFAULT(now()) NOT NULL
 )
 */

import { reactive, set, computed } from 'vue'
import { nanoid } from 'nanoid'
import { supabase } from '~/plugins/supabase'

// Reactive 'global' variable
const software = reactive({
  data: [] as array,
  count: null as null | number,
  error: null as null | string,
  fetching: false
})
/**
 * == REALTIME ==
 * Listen for realtime changes
 */
supabase
  // ['*', 'tableName']
  .from('software')
  // [INSERT | UPDATE | DELETE | *]
  .on('*', (payload) => {
    // Check if the payload.new is in the software.list
    // if yes, delete it. That means that it comes from outside
    if (payload.eventType === 'DELETE') {
      const deletedIdx = software.data.findIndex(i => i.id === payload.old.id) as number
      deletedIdx !== -1 && software.data.splice(deletedIdx, 1)
      return
    }

    // If the updated element is the same that the one existing in state,
    // do not update the local state
    let localIdx = software.data.findIndex(i => i.id === payload.new.id)
    const eq = isequal(software.data[localIdx], payload.new)
    if (eq) {
      return
    }
    localIdx = localIdx === -1 ? software.data.length : localIdx
    set(software.data, localIdx, payload.new)
  })
  .subscribe()

/**
 * Retrieve all software for the signed in user
 */
const fetchSoftware = async () => {
  try {
    software.fetching = true
    const { data, count, error } = await supabase
      .from('software')
      .select('id, title, description, version, mentions', { count: 'exact' })
      .order('id')
      .limit(30)
    if (error) {
      console.log('error', error)
      return
    }
    software.data = data
    software.count = count
  } catch (err) {
    software.error = err
    console.error('Error retrieving data from db', err)
  } finally {
    software.fetching = false
  }
}
const fetchSoftwareId = async (id) => {
  try {
    software.fetching = true
    const { data, error } = await supabase
      .from('software')
      .select('*')
      .eq('id', id)
    if (error) {
      console.log('error', error)
      return
    }
    return data[0]
  } catch (err) {
    console.error(`Error retrieving id: ${id} from db`, err)
    return null
  }
}
const searchText = async (text:string = 'Key') => {
  try {
    software.fetching = true
    const { data, count, error } = await supabase
      .from('software')
      .select()
      .textSearch('description', text)
    // .limit(30)
    software.fetching = false
    console.log('🎹', data, error)
    software.data = data
    software.count = count
  } catch (err) {
    software.error = err
    console.error('Error searching data from db', err)
  } finally {
    software.fetching = false
  }
}

/**
 *  Add a new software to supabase
 */
const addSoftware = async (softwareText) => {
  try {
    if (!softwareText) {
      return
    }
    const now = new Date().toISOString().slice(0, -1)
    const software = {
      id: nanoid(), // custom ID
      text: softwareText,
      done: false,
      created_at: now
    }
    // Update local state
    software.data.push(software)

    // Save data in DB
    // Returns the new software in case it's needed
    await supabase.from('software').insert(software).single()
  } catch (err) {
    console.error('Unknown problem inserting to db', err)
    // remove local software in case of error
    return null
  }
}

const removeSoftware = async (software, index) => {
  try {
    // update current state (Optimistic UI)
    software.data.splice(index, 1)
    // Update database
    await supabase.from('software').delete().match({ id: software.id })
  } catch (e) {
    console.error(e)
  }
}
// Workaround for Vue2 to make this property readonly with composition API
// It is important to compute the reactive variables to make
// them readonly. In vue 3 this step is not necessary.
const softwareData = computed(() => software.data)
const softwareCount = computed(() => software.count)
const softwareFetching = computed(() => software.fetching)
const softwareError = computed(() => software.error)

export {
  softwareData,
  softwareCount,
  softwareError,
  softwareFetching,
  fetchSoftware,
  fetchSoftwareId,
  addSoftware,
  removeSoftware,
  searchText
}
