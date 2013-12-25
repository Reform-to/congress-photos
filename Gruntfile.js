module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    fetchpages: {
      options: {
        urls: [
          { url: 'http://assets.sunlightfoundation.com/moc/40x50.zip', localFile: '40x50.zip' },
          { url: 'http://assets.sunlightfoundation.com/moc/100x125.zip', localFile: '100x125.zip' },
          { url: 'http://assets.sunlightfoundation.com/moc/200x250.zip', localFile: '200x250.zip' },
        ],
        filesBaseURL: 'http://assets.sunlightfoundation.com/moc/',
        target: 'tmp/'
      },
      files: [
      ]
    },

    clean: {
        build: ['tmp']
    }

  });

  grunt.loadNpmTasks('grunt-fetch-pages');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['fetchpages']);
  grunt.registerTask('default', ['build']);
}
