// ============================================
// Clean task
// ============================================
//  clears dist folder
// ============================================

function close (done) {
  done()
  process.exit(process.pid)
}

// Description
close.displayName = 'close'
close.description = 'Exits process'

// Export
export default close
