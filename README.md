<img width="572" alt="music_store" src="https://user-images.githubusercontent.com/13613724/61176831-8c4e9a00-a57c-11e9-8614-66a7dfc95345.png">

---

<img width="580" alt="music_store_form" src="https://user-images.githubusercontent.com/13613724/61176847-ce77db80-a57c-11e9-9805-1006a27c7cb5.png">

# About

This is a single-page application built from scratch using Backbone, Express,
Pug (formerly known as Jade), Stylus and Handlebars. This project accumulates a
large variety of Frontend technologies and knowledge.

# Some notes regarding this application's setup

* created application skeleton with express
* npm install `nodemon` as dev dependency and change `npm start` to use
  `nodemon`
* initialized bower components with `bower init`
* install bower dependencies
  * `jquery`, `backbone` (will install `underscore` automatically), and
    `handlebars`
* installed npm `grunt` package as dev dependency and then grunt plugins (dev):
  * `grunt-bower-concat` to concatenate bower plugins
  * `grunt-contrib-handlebars`: lets us have external handlebars templates
    precompiled into JS functions
  * `grunt-contrib-uglify`: minify JS files as much as possible
  * `grunt-contrib-watch`: lets us monitor handlebars directory and if changes
    to templates then it'll automatically recompile the JS file
  * set up grunt file to concat and minify our JS and run it with `grunt` CLI
    command
  * install `Stylus` with `npm install`
