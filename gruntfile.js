module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    //watch: {
      //files: ['<%= jshint.files %>'],
      //tasks: ['jshint']
    //},
    sass: {
      dist: {
        files: [{
          'app/assets/css/main.css' : 'app/assets/sass/main.scss'
        }],
        options: {                       // Target options
          style: 'compressed'
        }
      }
    },
    watch: {
        sass_to_css: {
            files: 'app/**/*.scss',
            tasks: [
                'sass'
            ]
        },
        sourcemap_cleanup: {
            files: ['app/css/*.css'],
            tasks: ['replace', 'clean:sourcemap']
        }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
        dest: 'dist/built.js',
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');


  grunt.registerTask('default', ['jshint', 'sass', 'watch', 'concat']);

};