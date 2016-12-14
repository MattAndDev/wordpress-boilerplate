import gulp from 'gulp'
import config from '../config'
import browserSync from 'browser-sync'
import flatten from 'gulp-flatten'
import changed from 'gulp-changed'

// ============================================
// Markup task
// ============================================
//  Compiles html partials and minifies
// ============================================

function templates () {
  return gulp.src(config.templates.src, {base: config.templates.base})
    .pipe(changed(config.templates.dest))
    .pipe(gulp.dest(config.templates.dest))
    .pipe(browserSync.reload({stream:true}));
}

// Description
templates.displayName = 'twig'
templates.description = 'Compiles and minifies twig templates'

// Export
export default templates
