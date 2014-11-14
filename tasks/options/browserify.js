var mold = require('mold-source-map'),
    streamifier = require('streamifier'),
    concat = require('concat-stream');

module.exports = {
   dist: {
      options: {
         browserifyOptions: {
            debug: true
         },
      },
      files: {
         './dist/js/index.js': ['./src/js/**/*.js']
      }
   }
};