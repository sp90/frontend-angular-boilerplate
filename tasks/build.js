module.exports = function(grunt) {
    grunt.registerTask('build', ['build:scss', 'build:js', 'build:assets']);

    grunt.registerTask('build:scss', ['sass:dist', 'clean:tmp']);
    grunt.registerTask('build:js', ['browserify']);
    grunt.registerTask('build:assets', ['copy']);
    
    grunt.registerTask('dev:scss', ['sass:dev', 'clean:tmp']);
};
