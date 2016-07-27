/*
	Author: Fernando Herrera
	Descripcion: Archivo de configuracion del grunt
	Nota: Este archivo debe de estar en la raiz... este es un simple backup
 */
module.exports = function(grunt) {

  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
    
    connect: {
      all: {
        options: {
          port: 9000,
          hostname: 'localhost',
          base: 'app-dev/',
          livereload: true,
          open: false
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: ['app-dev/app/**/*.js'],
        options: {
          livereload: true
        },
      //tasks: ['default'],
      },
      html: {
        files: ['app-dev/**/*.html'],
        options: {
          livereload: true
        },
      },
      css: {
        files: ['app-dev/**/*.css'],
        options: {
          livereload: true
        },
      },

    },
    uglify: {
      src: {
        files: {
          'dest/output.min.js': ['src/input.js']
        }
      }
    },
    copy: {
      config: {
        files: [{  //---- Back up de los archivos de configuracion
          expand: true,
          src: ['Gruntfile.js','package.json'],
          dest: 'app-dev/'
        },
        {  // -- Mover los archivos de librerias de angular
          expand: true,
          flatten: true,
          src: [
              'node_modules/angular/angular.min.js',
              'node_modules/angular-cookies/angular-cookies.min.js',
              'node_modules/angular-ui-router/release/angular-ui-router.min.js'
              ],
          dest: 'app-dev/assets/libs/',
          filter: 'isFile'
        }]
     },
      js: {
        files: [
          // includes files within path and its sub-directories 
          {
            expand: true,
            src: ['app-dev/**'],
            dest: 'dist/'
          }
        ],
      },
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'release/css',
          src: ['app-dev/assets/css/*.css', 'app-dev/assets/css/!*.min.css'],
          dest: 'dist/assets/css',
          ext: '.min.css'
        }]
      }
    },
    htmlmin: { // Task 
      dist: { // Target 
        options: { // Target options 
          removeComments: true,
          collapseWhitespace: true
        },
        files: { // Dictionary of files 
          'dist/index.html': 'src/index.html', // 'destination': 'source' 
          'dist/contact.html': 'src/contact.html'
        }
      }
    }
  });


  // Ver cambios en los archivos
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Copiar archivos
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Compresor de archivos HTML
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Compresor de archivos JS
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Compresor de archivos CSS
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Conectar a un servidor we
  grunt.loadNpmTasks('grunt-contrib-connect');



  // Default task(s).
  //grunt.registerTask('default', ['copy:config', 'connect', 'watch']);
  grunt.registerTask('default', ['copy:config','connect','watch']);


};
