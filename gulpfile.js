var gulp = require('gulp'); 
var $ = require('gulp-load-plugins')();
var svgSprite = require('gulp-svg-sprite');


gulp.task('svg', function(){
    return gulp.src('./icons/svg/*.svg')
        .pipe($.plumber())
        .pipe($.svgSprite({
            mode: {
                symbol: {
                    dest: './',
                    sprite: 'sprite.svg'
                }
            }
        }))
        .pipe(gulp.dest('./'))
}) ; 

