module.exports = function(grunt) {
  grunt.config('watch', {
    compass: {
      files: ['<%= compass.dev.src %>'],
      tasks: ['compass'],
    },
    jshint :{
      files: ['<%= jshint.app.src %>'],
      tasks: ['jshint'],
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
