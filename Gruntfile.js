module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    curl: {
      small: {
        src: 'http://assets.sunlightfoundation.com/moc/40x50.zip',
        dest: 'tmp/zip/40x50.zip'
      }
    },

    'unzip': {
      small: {
        src: 'tmp/zip/40x50.zip',
        dest: 'tmp/src'
      }
    },

    copy: {
      small: {
        files: [
          { expand: true, src: ['tmp/src/40x50/**'], dest: 'dist/assets/' },
        ]
      }
    },

    clean: {
        tmp: ['tmp'],
    }

  });

  grunt.loadNpmTasks('grunt-curl');
  grunt.loadNpmTasks('grunt-zip');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['curl', 'unzip']);
  grunt.registerTask('default', ['build', 'clean']);
  grunt.registerTask('open', ['unzip']);
}
