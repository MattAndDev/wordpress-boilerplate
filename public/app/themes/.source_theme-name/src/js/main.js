// import utils
import runtime from './utils/runtime'
import settings from './utils/settings'

// $.ready
let domReady = function (callback) {
  document.readyState === 'interactive' || document.readyState === 'complete' ? callback() : document.addEventListener('DOMContentLoaded', callback)
}

domReady(() => {

  // example settings listeers
  settings.on('resize', () => {})
  settings.on('scroll', () => {})
  settings.on('mousemove', (e) => {})

  // do some magic

})
