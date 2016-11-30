'use strict'

import gulp from 'gulp'
import changed from 'gulp-changed'
import config from '../config'
import browserSync from 'browser-sync'

// ============================================
// Clean task
// ============================================
//  clears dist folder
// ============================================


function code (done) {
  return gulp.src(config.code.src)
  .pipe(changed(config.code.dest))
  .pipe(gulp.dest(config.code.dest))
  .pipe(browserSync.reload({stream: true}))
}


// Description
code.displayName = 'code'
code.description = 'Moves php to destination folder'

// Export
export default code
