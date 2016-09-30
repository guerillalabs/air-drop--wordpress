# Air-Drop

A little something to kick off all your campaigns.

## About Air-Drop

Air-Drop is an all-in-one WordPress theme template that includes the SASSpool framework. It's designed to get a project up and running as quickly as possible while remaining flexible enough to become the production base for any site.

## Requirements

These items must be installed on your computer:

* [Node.js](http://nodejs.org)
* [Bower](http://bower.io)
* [LibSass](http://sass-lang.com/libsass)
* [grunt-cli](http://gruntjs.com/getting-started#installing-the-cli)

## Getting Started

When you first download the repo, you will want to open the project directory in terminal and run `npm install`. This will download all the packages you need to run grunt, sass and autoprefixer on this project.

Next, run `bower install`. This will download jQuery and other third-party libraries used in this project.

Running `grunt` will start the task that watches for changes to your files. It's best to do a symbolic link from your locally installed WordPress themes directory to this project for testing. To kill the watch task, type `ctrl` + `c` in the terminal. (**Note:** the `grunt` command will fail if you run it at this point because no Sass files are present in the project. See 'Including a Sass Library' below for more information.)

### Including a Sass Library

Air-Drop was developed as a companion to the [Sasspool](https://github.com/guerillalabs/Sasspool) framework. To include Sasspool in your project, open the project directory in terminal and run:

`svn export https://github.com/guerillalabs/Sasspool/trunk/sass --force`

This will bring over the "sass" folder from the Sasspool repository (without any versioning history, as you will want to modify the files to suit your project). Air-Drop is configured to compile Sasspool files automatically, so once you run `grunt`, everything should work as expected.

You can also include other Sass libraries, as needed. Note that Air-Drop uses Autoprefixer, so you may want to visit your `Gruntfile.js` to make sure the settings meet the needs of your library.

Air-Drop is set to not commit Sass files to the repository (to make it easier to develop the Air-Drop project), so you will want to remove the `sass/*` line from your `.gitignore` as you begin work if you are using git for version control.

#### Using Sasspool

Sasspool has a lot of functions and helpers that you will want to be aware of. Read the documentation on [the Sasspool page](https://github.com/guerillalabs/Sasspool) for full details on how to use it best.

### Working with the Theme

Air-Drop uses [underscores](https://github.com/automattic/_s) as a base (as of https://github.com/Automattic/_s/tree/ff4b374d6bf289eb602e9cebba369077dd446050).

The first thing you want to do is change the theme name to something else (like, say, `megatherium`), and then you'll need to do a five-step find and replace on the name in all the templates.

1. Search for `'_s'` (inside single quotations) to capture the text domain.
2. Search for `_s_` to capture all the function names.
3. Search for `Text Domain: _s` in style.css.
4. Search for <code>&nbsp;_s</code> (with a space before it) to capture DocBlocks.
5. Search for `_s-` to capture prefixed handles.

OR

* Search for: `'_s'` and replace with: `'megatherium'`
* Search for: `_s_` and replace with: `megatherium_`
* Search for: `Text Domain: _s` and replace with: `Text Domain: megatherium` in style.css.
* Search for: <code>&nbsp;_s</code> and replace with: <code>&nbsp;Megatherium</code>
* Search for: `_s-` and replace with: `megatherium-`

### Setting up a symbolic link

We find symbolic links are the best way to develop themes locally. You'll setup a symbolic link within the `themes` folder of your WordPress install to the directory of this theme. When within the themes directory in terminal, use the following command (tip 1 - drag the folder for this theme to the terminal window to get the path. tip 2 - for the symlink path, since you are already in the directory, just enter something like 'my-theme'.):

`ln -s /path/to/original /path/to/symlink`

## Adding JavaScript Libraries

To add a new JavaScript library – either home-grown or third-party – you'll want to edit `Gruntfile.js`. In the concat task, you'll find something like this:

``` javascript
concat: {
    dist: {
        files: {
            'js/global.js' : [
            'js/scripts/logging.js'
            ]
        }
    },
    ...
```

The first line after the `files: {` line is the file we're writing to. Add your new libraries to the list after `'js/scripts/logging.js'` (don't forget your commas). Home grown libraries should go in the `js/scripts` directory (so they aren't compressed with Uglify) and third-party libraries should end up in the `vendor` directory because they should be managed with Bower. This is a great way to bring in components from libraries like Bootstrap.