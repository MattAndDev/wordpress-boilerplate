import gulp from 'gulp'
import config from '../config'
import browserSync from 'browser-sync'
import twigCompiler from 'gulp-twig'
import handleErrors from '../util/handleErrors'
import minifyHTML from 'gulp-minify-html'

// ============================================
// Markup task
// ============================================
//  Compiles html partials and minifies
// ============================================


function twig () {
  return gulp.src(config.twig.src)
    .pipe(twigCompiler())
    .on('error', handleErrors)
    .pipe(minifyHTML({spare: true}))
    .pipe(gulp.dest(config.twig.dest))
    .pipe(browserSync.reload({stream: true}))
}

// Description
twig.displayName = 'twig'
twig.description = 'Compiles and minifies twig templates'

// Export
export default twig
