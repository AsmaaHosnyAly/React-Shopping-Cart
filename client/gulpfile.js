// top level functions[task-src-dest-watch]

const gulp=require('gulp');
const qulpSass=require('gulp-sass');
const sass=qulpSass(require('sass'));


// gulp.task('log',async function(){
//     console.log("logging");
// })

// gulp.task('move',async function(){
//     gulp.src('css1/*.css').pipe(gulp.dest('css2'));
// })

// gulp.task('watching',function(){
//     gulp.watch('css1/style.css'), function(){
//         gulp.src('css1/*.css').pipe(gulp.dest('css2'));
//     }
// })

gulp.task('sass' ,async function(){
    gulp.src('src/components/**/*.scss').pipe(sass()).pipe(gulp.dest('src/css'));
})