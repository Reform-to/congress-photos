module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    curl: {
      small: {
        src: 'http://assets.sunlightfoundation.com/moc/40x50.zip',
        dest: 'tmp/40x50.zip'
      }
    },

    'unzip': {
      small: {
        src: 'tmp/40x50.zip',
        dest: 'img'
      }
    },

    clean: {
        tmp: ['tmp'],
    }

  });

  grunt.loadNpmTasks('grunt-curl');
  grunt.loadNpmTasks('grunt-zip');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['curl', 'unzip', 'clean']);
  grunt.registerTask('default', ['build']);
  grunt.registerTask('open', ['unzip']);
}
