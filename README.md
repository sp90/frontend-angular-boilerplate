## Frontend Angular Boilerplate

A boilerplate for angular applications - see the summary for basic description of content or the list for a detailed view. 

### Summary

This basicly runs node.js server that return index.js on all url's. 

Then it uses Angular with ng-animate applied and the  "ui-router" and then i attached the full jquery(1.11.1) libary so it has IE8 support.

It has browserify for js dependencies management & sourcemaps for scss development. It has dev & prod build setups.

There is also a sublime-project file for those of you that use sublime - if you dont use it you can delete the file.

### Getting started

Start download the project as a zip or clone it and remove the .git folder

`npm install`'s both bower components and node dependencies

`grunt` just builds the project with development settings such as sourcemaps for sass and dont minify ether js or css.

`grunt dev` does the grunt command first then it adds a concurrent build so file changes proc's a build on the type of files.

`grunt build` does a minifyed version of css and javsacript for a production enviroment.

`npm start` starts the node server on port 3000 or the pref enviroment port by this `process.env.PORT || 3000` port setup.

### Content list

Package scripts:

* preinstall: bower install
* postinstall: grunt build
* start: node index.js

Dependencies & Versions:

* bower: 1.3.10
* browserify: 5.9.3
* browserify-shim: 3.7.0
* concat-stream: 1.4.6
* express: 4.9.1
* grunt: 0.4.5
* grunt-browserify: 3.0.1
* grunt-cli: 0.1.13
* grunt-concurrent: 1.0.0
* grunt-contrib-clean: 0.6.0
* grunt-contrib-copy: 0.5.0
* grunt-contrib-watch: 0.6.1
* grunt-sass: 0.16.1
* load-grunt-tasks: 0.6.0
* lodash: 2.4.1
* mold-source-map: 0.3.0
* morgan: 1.3.1
* should: 4.0.4
* streamifier: 0.1.0


Javascript libaries:

* angular: ~1.3.2
* angular-resource: ~1.3.2
* angular-animate: ~1.3.2
* jquery: ~1.11.1
* ui-router: ~0.2.11