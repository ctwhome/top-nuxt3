/**
 * Thanks to [jyotirmaybarman](https://github.com/jyotirmaybarman) for developing this plugin
 */

import { defineNuxtPlugin } from '#app'


import hljs from 'highlight.js'
import mdit from 'markdown-it'

import sub from 'markdown-it-sub'
import sup from 'markdown-it-sup'
import fn from 'markdown-it-footnote'
import emo from 'markdown-it-emoji'
import def from 'markdown-it-deflist'
import ins from 'markdown-it-ins'
import container from 'markdown-it-container'


const markdownit = new mdit({
  html:         true,
  xhtmlOut:     false,
  breaks:       false,
  langPrefix:   'language-',
  linkify:      true,
  typographer:  true,
  quotes: '“”‘’',
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
          hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
          '</code></pre>'
      } catch (error) {console.log(error)}
    }

    return '<pre class="hljs"><code>' + mdit.utils.escapeHtml(str) + '</code></pre>'
  }
})
  .use(sub)
  .use(sup)
  .use(fn)
  .use(emo)
  .use(def)
  .use(ins)
  .use(container,'codeblock',{marker:'@'})

markdownit.linkify.set({ fuzzyEmail: false })


export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('mdit',markdownit)
})
