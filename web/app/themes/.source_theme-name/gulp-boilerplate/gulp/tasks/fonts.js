import gulp from 'gulp'
import config from '../config'
import browserSync from 'browser-sync'
import handleErrors from '../util/handleErrors'

// ============================================
// fonts task
// ============================================
//  just moving fonts to dest
// ============================================

function fonts () {
  return gulp.src(config.fonts.src)
    .pipe(gulp.dest(config.fonts.dest))
    .pipe(browserSync.reload({stream: true}))
}

// Description
fonts.displayName = 'fonts'
fonts.description = 'Moves fonts to dest folder'

// Export
export default fonts
