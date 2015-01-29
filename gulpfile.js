var gulp = require('gulp');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gulpAtom = require('gulp-atom');

var paths = {
  scripts: 'src/js/**/*.coffee'
};

gulp.task('atom', function() {
    return gulpAtom({
      srcPath: './src',
      releasePath: './release',
      cachePath: './cache',
      version: 'v0.20.7',
      rebuild: false,
      platforms: ['win32-ia32', 'darwin-x64', 'linux-x64']
    });
});

gulp.task('coffee', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
      .pipe(coffee())
      // .pipe(uglify())
      // .pipe(concat('all.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/dest/js'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['coffee']);
});
