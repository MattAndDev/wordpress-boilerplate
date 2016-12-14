import gulp from 'gulp'
import config from '../config'
import size from 'gulp-filesize'
import uglify from 'gulp-uglify'

// ============================================
// Uglify task
// ============================================
//  Comrpesses and uglifies js
// ============================================

function minifyJs () {
  return gulp.src(config.production.jsSrc)
    .pipe(uglify())
    .pipe(gulp.dest(config.production.jsDest))
    .pipe(size())
}

minifyJs.displayName = 'minifyJs'
minifyJs.description = 'Uglifies and compresses JavaScript files'

export default minifyJs
