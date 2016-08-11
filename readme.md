# Black Axe Default Project Skeleton #

This is basically a skeleton file structure for setting up a new project. It also includes a gulp setup for automating a zillion things like autoprefixing, sass compiling, image optimizing, test server, etc.

## Installing Stuff ##
* clone this
* run `bower install` to intall bower dependencies
* run `npm install` to install all of the dependencies
* `gulp` to start the gulp task to watch everything and start the server

## Building Production Site ##
* `gulp build` to build the production site into the `/dist/` folder

## Requirements ##
* You need [Node](https://nodejs.org/en/)
* You need Gulp `sudo npm install gulp -g`

## What are all these files? ##
* `/app` The development folder. Do everything in here
* `/app/css` Outputted css destination. You can add third-party css libraries in here too
* `/app/fonts` Put any fonts in here. Duh.
* `/app/img` Image files. Duh again.
* `/app/jade` Jade templates live in here
* `/app/js` All your javascript files. Once again, duh
* `/app/sass` Them SASS files. 
* `/dist/` The production site will get spit out into here. You don't have to manually do anything here.
* `gulpfile.js` All the gulp stuff that you can run. You may need to tweak some directories or something in here if you mess with the directory structure in the project.
* `package.json` This is where node handles its dependencies. Don't mess with it.
* `bower.json` Bower dependencies. You probably don't have to mess with this.

## Issues ##
* I'm sure little things will get tweaked as we start actually using this
* I'd like to get this integrated with the default sass project stuff at some point
* It's fairly easy to set this up to work with .scss instead of .sass, but it's not automatic. I'd like to make it automatic eventually.
* I'm sure there is some classy way to get empty folders to show up in the git thing. I don't know it yet.
* Unsure if bower components will concatenate into the other stuff when building.