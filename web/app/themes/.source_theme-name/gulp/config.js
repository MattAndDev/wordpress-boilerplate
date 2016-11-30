var dest = './dist'
var src = './src'

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
    port: 9000,
    server: {
      // Serve up our build folder
      baseDir: dest
    },
    notify: false,
    open: false,
    files: [
      dest + '/css/*',
      dest + '/js/*',
      dest + '*.html'
    ]
  },


  fonts: {
    src: src + '/fonts/**',
    dest: dest + '/fonts'
  },



  // ==============================
  // images.js settings
  // ==============================

  images: {
    src: src + '/images/**',
    dest: dest + '/images',

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
    dest: dest + '/css',

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
    src: src + '/icons/*.svg',
    dest: dest + '/images',
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
              dest: '../../src/sass/_sprite.scss'
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
