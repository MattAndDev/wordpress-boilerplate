import gulp from 'gulp'
import config from '../config'
import minifyCSS from 'gulp-cssnano'
import size from 'gulp-filesize'

// ============================================
// minifyCss task
// ============================================
//  minifies css with css-nano
// ============================================

function minifyCss () {
  return gulp.src(config.production.cssSrc)
    .pipe(minifyCSS())
    .pipe(gulp.dest(config.production.cssDest))
    .pipe(size())
}

// Description
minifyCss.displayName = 'minify css'
minifyCss.description = 'css minification'

// Export
export default minifyCss
