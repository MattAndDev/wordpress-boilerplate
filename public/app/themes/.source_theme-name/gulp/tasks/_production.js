'use strict'

import gulp from 'gulp'
import minifyCss from './minifyCss'
import minifyJs from './minifyJs'
import close from '../util/close'

// Run this to compress all the things!
gulp.task('production', gulp.series(
  'base',
  gulp.parallel(minifyCss, minifyJs),
  close
))
