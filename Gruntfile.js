module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    curl: {
      small: {
        src: 'http://assets.sunlightfoundation.com/moc/40x50.zip',
        dest: 'tmp/zip/40x50.zip'
      },
      medium: {
        src: 'http://assets.sunlightfoundation.com/moc/100x125.zip',
        dest: 'tmp/zip/100x125.zip'
      },
      large: {
        src: 'http://assets.sunlightfoundation.com/moc/200x250.zip',
        dest: 'tmp/zip/200x250.zip'
      }
    },

    'unzip': {
      small: {
        src: 'tmp/zip/40x50.zip',
        dest: 'tmp/src'
      },
      medium: {
        src: 'tmp/zip/100x125.zip',
        dest: 'tmp/src'
      },
      large: {
        src: 'tmp/zip/200x250.zip',
        dest: 'tmp/src'
      },
    },

    copy: {
      small: {
        files: [
          { expand: true, cwd: 'tmp/src/', src: ['40x50/**'], dest: 'dist/' },
        ]
      },
      medium: {
        files: [
          { expand: true, cwd: 'tmp/src/', src: ['100x125/**'], dest: 'dist/' },
        ]
      },
      large: {
        files: [
          { expand: true, cwd: 'tmp/src/', src: ['200x250/**'], dest: 'dist/' },
        ]
      },
    },

    clean: {
        tmp: ['tmp'],
        dist: ['dist']
    }

  });

  grunt.loadNpmTasks('grunt-curl');
  grunt.loadNpmTasks('grunt-zip');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('fetch', ['clean:tmp', 'curl', 'unzip']);
  grunt.registerTask('build', ['clean:dist', 'copy']);
  grunt.registerTask('build:medium', ['clean:dist', 'copy:medium']);
  grunt.registerTask('default', ['fetch', 'build']);
}
