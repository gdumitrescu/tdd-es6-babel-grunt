module.exports = function (grunt) {
    "use strict";

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        express: {
            all: {
                options: {
                    port: 9000,
                    hostname: "0.0.0.0",
                    bases: ["app", "node_modules"]
                }
            }
        },
        babel: {
          options: {
              sourceMap: false
          },
          dist: {
              files: {
                  'app/es5/specs.js': 'app/es6/specs.js'
              }
          }
        },
        watch: {
            all: {
                files: "app/**/*.*",
                options: {
                    livereload: true
                }
            },
            js: {
                files: "app/es6/*.js",
                tasks: ["babel"]
            }
        },
        open: {
            all: {
                path: "http://localhost:9000/index.html"
            }
        }
    });

    grunt.registerTask("default", ["babel", "express", "open", "watch"]);
};
