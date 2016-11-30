'use strict';

import gulp from 'gulp'
import browserSync from 'browser-sync'
import gulpSass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import handleErrors from '../util/handleErrors'
import config from '../config'
import autoprefixer from 'gulp-autoprefixer'

// ============================================
// Sass task
// ============================================
//  Sass compilation via node sass and autoprefixer
// ============================================


function sass () {
  return gulp.src(config.sass.src)
    .pipe(sourcemaps.init())
    .pipe(gulpSass(config.sass.settings))
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({ browsers: config.sass.prefix }))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.sass.dest))
    .pipe(browserSync.reload({stream: true}))
}

// Description
sass.displayName = 'sass'
sass.description = 'Compiles sass and docks autoprefixer'

// Export
export default sass
