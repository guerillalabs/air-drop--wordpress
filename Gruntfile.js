module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        autoprefixer: {
          main: {
            options: {
              browsers: ['> 1%', 'last 2 versions', 'ie >= 9'],
              map: true
            },
            src: 'css/*.css'
          }
        },

        concat: {
            dist: {
                files: {
                    'js/global.js' : [
                    // 'js/scripts/logging.js'
                    ]
                }
            }
        },

        sass: {
            dist: {
                options: {
                    outputStyle: 'compressed',
                    sourceMap: true,
                    sourceMapEmbed: false
                },
                files: [{
                    expand: true,
                    cwd: 'sass',
                    src: ['*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },

        uglify: {
            dist: {
                files: [{
                expand: true,
                cwd: 'js',
                src: ['*.js', '!*.min.js'],
                dest: 'js',
                ext: '.min.js'
                }]
            }
        },

        watch: {
            css: {
                files: 'sass/**/*.scss',
                tasks: ['sass', 'autoprefixer'],
                options: {
                    spawn: false,
                    interrupt: true
                }
            },

            js: {
                files: 'js/**/*.js',
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                    interrupt: true
                }
            }
        }
    });

    grunt.registerTask('default', ['sass', 'autoprefixer', 'concat', 'uglify', 'watch']);

    // plugin tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
}