import gulp from 'gulp'
import clean from './clean'
import code from './code'
import bundler from './bundler'
import fonts from './fonts'
import images from './images'
import sass from './sass'
import sprite from './sprite'
import server from './server'
import templates from './templates'
import config from '../config'


gulp.task('watch',

  // Run base task
  // and start dev server
  gulp.series(
    'base',
    server
  ),

  // Sprite (svg) watcher
  gulp.watch(
    config.svgSprite.src,
    gulp.parallel(sprite)
  ),

  // JavaScript watcher
  gulp.watch(
    config.browserify.srcAll,
    gulp.parallel(bundler)
  ),

  // Sass watcher
  gulp.watch(
    config.sass.src,
    gulp.parallel(sass)
  ),

  // Images watcher
  gulp.watch(
    config.images.src,
    gulp.parallel(images)
  ),

  // Fonts watcher
  gulp.watch(
    config.fonts.src,
    gulp.parallel(fonts)
  ),

  // Code watcher
  gulp.watch(
    config.code.src,
    gulp.parallel(code)
  ),

  // templates watcher
  gulp.watch(
    [config.templates.src],
    gulp.parallel(templates)
  )
)
