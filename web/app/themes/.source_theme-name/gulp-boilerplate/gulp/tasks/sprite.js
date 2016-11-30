import gulp from 'gulp'
import changed from 'gulp-changed'
import plumber from 'gulp-plumber'
import rename from 'gulp-rename'
import svgsprite from 'gulp-svg-sprite'
import svgmin from 'gulp-svgmin'
import config from '../config'
import handleErrors from '../util/handleErrors'

// ============================================
// Sprite task
// ============================================
//  Creates svg sprite and scss stylesheet
// ============================================

function sprite () {
  return gulp.src(config.svgSprite.src)
    .pipe(changed(config.svgSprite.dest))
    .pipe(svgmin(config.svgSprite.svgmin))
    .pipe(plumber())
    .pipe(svgsprite(config.svgSprite.config))
    .pipe(gulp.dest(config.svgSprite.dest))
}

sprite.displayName = 'sprite'
sprite.description = 'Creates svg sprites and relevant scss partial'

export default sprite
