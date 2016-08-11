// /////////////////////////////////////////////
// Required Stuff
// /////////////////////////////////////////////

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var jade = require('gulp-jade');
var debug = require('gulp-debug');

// /////////////////////////////////////////////
// TASKS
// /////////////////////////////////////////////

//compile sass
gulp.task('sass', function(){
	var autoprefixerOptions = {
	  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
	};

  return gulp.src('app/sass/app.sass') //source sass file
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(autoprefixer(autoprefixerOptions)) //autoprefixin
  .pipe(gulp.dest('app/css')) //final css output destination
  .pipe(browserSync.reload({
    stream: true
  }))
});

//concatinate js and css files
gulp.task('useref', function () {
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', minifyCSS()))
    .pipe(debug())
    .pipe(gulp.dest('dist'));
});

//optimize images
gulp.task('images', function(){
  return gulp.src('app/img/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/img'))
});

//jade compiling -- this can probably be improved still
gulp.task('jade', function () {
  return gulp.src('app/jade/**/[^_]*.jade')
  // .pipe(gulpIgnore.exclude('app/jade/**/_*.jade'))
  .pipe(jade({
    pretty: true
  }))
  .pipe(gulp.dest('app/'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

//move fonts to the right place
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
});

//clean up and delete everything in dist -- run before building
gulp.task('clean', function(callback) {
  del('dist');
  return cache.clearAll(callback);
})

//clean everything but the images
gulp.task('clean:dist', function(callback){
  del(['dist/**/*', '!dist/img', '!dist/images', '!dist/images/**/*'], callback)
  return cache.clearAll(callback);
});

//browser sync task
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app',
      routes: {
        "/bower_components": "bower_components"
      }
    },
  })
});

// /////////////////////////////////////////////
// WATCH TASK
// /////////////////////////////////////////////

gulp.task('watch', ['browserSync', 'sass'], function(){
	//watch sass files
  gulp.watch('app/sass/**/*.sass', ['sass']); 
  //watch jade files
  gulp.watch('app/jade/**/*.jade', ['jade']); 
  //watch html files
  // gulp.watch('app/*.html', browserSync.reload); 
  //watch js files
  gulp.watch('app/js/**/*.js', browserSync.reload); 
});

// /////////////////////////////////////////////
// BUILD TASK
// /////////////////////////////////////////////

gulp.task('build', function (callback) {
  runSequence('clean:dist', 'jade', 
    ['sass', 'useref', 'images', 'fonts'],
    callback
  )
});

// /////////////////////////////////////////////
// DEFAULT TASK
// /////////////////////////////////////////////

gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
});