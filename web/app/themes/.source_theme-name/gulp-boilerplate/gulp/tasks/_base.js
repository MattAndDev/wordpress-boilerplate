import gulp from 'gulp'
import clean from './clean'
import bundler from './bundler'
import fonts from './fonts'
import images from './images'
import twig from './twig'
import sass from './sass'
import sprite from './sprite'
import server from './server'



gulp.task('base', gulp.series(
  gulp.parallel(clean),
  gulp.parallel(bundler, fonts, images, sprite),
  gulp.parallel(twig, sass)
))
