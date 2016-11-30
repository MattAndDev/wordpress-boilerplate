import browserSync from 'browser-sync'
import gulp from 'gulp'
import config from '../config'

// ============================================
// Server task
// ============================================
//  Dev server with browserSync
// ============================================

function server () {
  browserSync(config.browserSync)
}

// Description
server.displayName = 'server'
server.description = 'Starts dev server'

// Export
export default server
