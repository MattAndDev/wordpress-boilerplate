// =======================================================================
// settings.js
// =======================================================================
// Basic class to store global data and manage dom wide events
// =======================================================================


// Importing libs
import EventEmitter from 'eventemitter3'

// Settings class

class Settings extends EventEmitter {

  constructor () {

    super()

    // Initialises all properties
    this.init()

    // Add event listeners to update properties
    this.addEventListeners()

  }


  // Initialises all properties
  init () {

    // window size
    this.window = {
      x: window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth,
      y: window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight
    }

    // window scroll
    this.scroll = {
      x: window.pageXOffset || window.scrollLeft || document.body.scrollLeft,
      y: window.pageYOffset || window.pageYOffset || document.body.pageYOffset
    }

    // Is touch flag
    this.isTouch = !!(('ontouchstart' in window) || window.navigator && window.navigator.msPointerEnabled && window.MSGesture || window.DocumentTouch && document instanceof DocumentTouch)

    // Mouse position
    this.mouse = {
      x: 0,
      y: 0
    }


    let html = document.querySelector('html')
    // Mapping events
    if (this.isTouch) {
      html.classList.add('touch')
      this.events = {
        click: 'touchend',
        mouseenter: 'touchstart',
        mouseleave: 'touchend',
        mousedown: 'touchstart',
        mouseup: 'touchend',
        mousemove: 'touchmove',
        hover: 'touchstart'
      }
    }
    else {
      html.classList.add('no-touch')
      this.isTouch = {
        click: 'click',
        mouseenter: 'mouseenter',
        mouseleave: 'mouseleave',
        mousedown: 'mousedown',
        mouseup: 'mouseup',
        mousemove: 'mousemove',
        hover: 'hover'
      }
    }

    // resize vars
    this.resize = {
      timeout: false,
      delay: 250
    }


  }


  // Add event listener and emit events
  addEventListeners () {

    // Scroll
    window.addEventListener('scroll', () => {
      this.scroll.x = window.pageXOffset || window.scrollLeft || document.body.scrollLeft
      this.scroll.y = window.pageYOffset || window.pageYOffset || document.body.pageYOffset
      if (this.scroll.x == null) {
        this.scroll.x = 0
      }
      if (this.scroll.y == null) {
        this.scroll.y = 0
      }
      this.emit('scroll')
    })

    // Resize (with timeout)
    window.addEventListener('resize', () => {
      clearTimeout(this.resize.timeout)
      this.resize.timeout = setTimeout(() => {
        this.window.x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth
        this.window.y = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight
        // emit the resize event
        this.emit('resize')
      }, this.resize.delay)
    })

    // Mousemove
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX
      this.mouse.y = e.clientY
      // emit the mousemove event
      this.emit('mousemove', e)
    })
  }

}

export default new Settings()
