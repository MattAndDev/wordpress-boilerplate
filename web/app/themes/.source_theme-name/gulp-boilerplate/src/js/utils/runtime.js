// =======================================================================
// Animator.js
// =======================================================================
// Basic request animation frame manager for animations
// =======================================================================

class Runtime {

  start () {
    this.renderer()
  }

  renderer = () => {
    window.requestAnimationFrame(this.renderer)
  }

}

export default new Runtime()
