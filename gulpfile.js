const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
// 完成後，追蹤沒有使用到的 css
//const purgecss = require('gulp-purgecss')

function buildStyles(){
    // shinobi, sass
    return src('sass/**/*.scss')
        .pipe(sass())
        // 完成後，追蹤沒有使用到的 css
        //.pipe(purgecss({ content: ['*.html'] }))
        .pipe(dest('css'))
}

function watchTask(){
    // 完成後，追蹤沒有使用到的 css
    //watch(['sass/**/*.scss', '*.html'], buildStyles)
    
    // shinobi, sass
    watch(['sass/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)