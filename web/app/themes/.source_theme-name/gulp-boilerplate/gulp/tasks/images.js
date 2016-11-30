import changed from 'gulp-changed'
import gulp from 'gulp'
import imagemin from 'gulp-imagemin'
import config from '../config'
import browserSync from 'browser-sync'

// ============================================
// Images task
// ============================================
//  Minifies and compress images
// ============================================

function images () {
  return gulp.src(config.images.src)
    .pipe(changed(config.images.dest))
    .pipe(imagemin(config.images.options))
    .pipe(gulp.dest(config.images.dest))
    .pipe(browserSync.reload({stream: true}))
}


// Description
images.displayName = 'images'
images.description = 'Optimizes iamges and moved to dest directory'

// Export
export default images
