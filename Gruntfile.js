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
      source: {
        files: [
          { expand: true, cwd: 'tmp/src/', src: ['**/*.jpg'], dest: 'tmp/result/img' }
        ]
      },
      dist: {
        files: [
          { expand: true, cwd: 'tmp/result/', src: ['**'], dest: 'dist' }
        ]
      },
      release: {
        files: [
          { expand: true, src: ['bower.json'], dest: 'build/release' },
          { expand: true, cwd: 'tmp/result/', src: ['img/**'], dest: 'build/release' }
        ]
      }
    },

    clean: {
        tmp: ['tmp'],
        fetch: ['tmp/zip', 'tmp/src'],
        build: ['tmp/result'],
        dist: ['dist'],
        release: ['build/release/img']
    }

  });

  grunt.loadNpmTasks('grunt-curl');
  grunt.loadNpmTasks('grunt-zip');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('fetch', ['clean:fetch', 'curl', 'unzip']);
  grunt.registerTask('build', ['clean:build', 'copy:source']);
  grunt.registerTask('dist', ['clean:dist', 'copy:dist']);
  grunt.registerTask('release', ['clean:release', 'copy:release']);
  grunt.registerTask('default', ['clean', 'fetch', 'build', 'dist']);
}
