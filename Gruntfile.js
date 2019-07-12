// TODO: Setup handlebars template part and watchtask part
// Setup express to use the Stylus middleware to use both Jade and Stylus
// create routes that will load up the albums JSON file and serve that up to the
// view

module.exports = function (grunt) {
  // set up configurations for plugins
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          // take source file and output that as the destination file
          'public/javascripts/vendor/all.js': ['public/javascripts/vendor/all.js'],
        },
      },
    },
    bower_concat: {
      all: {
        // path matches what uglify picks up on
        dest: 'public/javascripts/vendor/all.js',
        // specified so dependencies are included in the proper order
        dependencies: {
          // underscore "relies" on jquery... so jquery first, underscore second
          'underscore': 'jquery',
          // backbone last
          // anything else in bower directory is included afterwards
          'backbone': 'underscore',
        },
      },
    },
  });

  // initialize above plugins
  [
    'grunt-bower-concat',
    'grunt-contrib-uglify',
  ].forEach(function (task) {
    // load each task
    grunt.loadNpmTasks(task);
  });

  // register 'default' task
  // first concatenates then uglifies
  grunt.registerTask('default', ['bower_concat', 'uglify']);
};
