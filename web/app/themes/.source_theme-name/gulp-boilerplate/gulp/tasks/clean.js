import config from '../config'
import del from 'del'

// ============================================
// Clean task
// ============================================
//  clears dist folder
// ============================================

function clean (done) {
  return del(config.dest, { dot: true, force: true }, done)
}

// Description
clean.displayName = 'clean'
clean.description = 'Removes destination folder'

// Export
export default clean
