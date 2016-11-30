'use strict'

var path = require('path')

function distName () {
  var folder = path.dirname(__dirname)
  folder = path.basename(folder)
  return folder.replace('.source_', '')
}

var folderName = distName()
var dest = './../' + folderName
var src = './src'
var server = 'wordpress-boilerplate.awsm.dev'



export default {


  destFolder: dest,



  // ==============================
  // browserify.js settings
  // ==============================


  browserify: {
    src: src + '/js/*.js',
    srcAll: src + '/js/**/*.js',
    dest: dest + '/js/',
    config: {

    },
    babel: {
      presets: ['es2015'],
      plugins: ['transform-class-properties']
    }
  },


  // ==============================
  // browserSync.js settings
  // ==============================

  browserSync: {
    port: 3030,
    proxy: server,
    notify: false,
    open: false,
    files: [
      dest + '/css/*',
      dest + '/js/*',
      dest + '*.html'
    ]
  },

  code: {
    src: src + '/code/**',
    dest: dest + '/'
  },

  fonts: {
    src: src + '/assets/fonts/**',
    dest: dest + '/assets/fonts'
  },



  // ==============================
  // images.js settings
  // ==============================

  images: {
    src: src + '/assets/images/**',
    dest: dest + '/assets/images',

    // gulp-imagemin settings

    options: {
    }
  },

  // ==============================
  // markup.js settings
  // ==============================

  twig: {
    src: src + '/twig/templates/*.twig',
    dest: dest + '/',
    partialsGlob: src + '/twig/**/*.twig'
  },


  // ==============================
  // _production.js settings
  // ==============================


  production: {
    cssSrc: dest + '/css/*.css',
    jsSrc: dest + '/js/*.js',
    dest: dest,
    cssDest: dest + '/css',
    jsDest: dest + '/js'
  },


  // ==============================
  // sass.js settings
  // ==============================

  sass: {
    src: src + '/sass/**/*.{sass,scss}',
    dest: dest + '/',

    // gulp-autoprefixer settings

    prefix: [
      'ie >= 9',
      'ie_mob >= 10',
      'ff >= 30',
      'chrome >= 34',
      'safari >= 7',
      'opera >= 23',
      'ios >= 7',
      'android >= 4.4',
      'bb >= 10'
    ],

    // gulp-sass settings

    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: 'images' // Used by the image-url helper
    }
  },

  // ==============================
  // sprite.js settings
  // ==============================


  svgSprite: {
    src: src + '/assets/icons/*.svg',
    dest: dest + '/assets/images',
    config: {
      shape: {
        id: {
          generator: 'i-%s'
        }
      },
      mode: {
        symbol: {
          sprite: 'sprite.svg',
          dest: '.',
          render: {
            scss: {
              template: 'gulp/tpl/_sprite-inline.scss',
              dest: '../../../.source_' + folderName + '/src/sass/_sprite.scss'
            }
          }
        }
      }
    },
    svgMin: {
      plugins: [
        { removeTitle: true },
        { removeDesc: true },
        { removeStyle: true },
        { removeAttrs: { attrs: '(fill|stroke|style)' } }
      ]
    }
  }


}
