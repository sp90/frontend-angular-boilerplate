module.exports = function(grunt) {
    grunt.registerTask('build', ['build:scss', 'build:js', 'build:assets']);
    grunt.registerTask('prod:scss', ['sass:dev', 'clean:tmp']);
    grunt.registerTask('build:scss', ['sass:dist', 'clean:tmp']);
    grunt.registerTask('build:js', ['browserify']);
    grunt.registerTask('build:assets', ['copy']);
};
