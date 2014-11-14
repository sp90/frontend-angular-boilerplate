module.exports = {
    js: {
        files: ['src/**/*.js'],
        tasks: ['build:js']
    },
    sass: {
        files: 'src/**/*.{sass,scss}',
        tasks: ['prod:scss'],
        options: {
          livereload: true
        }
    },
    assets: {
        files: ['src/**/*', '!src/**/*.{sass,scss,js}'],
        tasks: ['build:assets']
    }
};
