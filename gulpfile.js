
//引入模块
var gulp=require('gulp');
var sass = require('gulp-sass');
// 
//创建任务
gulp.task('windexSass',function(){

    gulp.src("./src/sass/index.scss") //得到文件流

    .pipe(sass({outputStyle:'compact'}))//编译后的文件流

    .pipe(gulp.dest('./src/css/')) //输出都硬盘

})
//头部css
gulp.task('wheaderSass',function(){

    gulp.src("./src/sass/header.scss") //得到文件流

    .pipe(sass({outputStyle:'compact'}))//编译后的文件流

    .pipe(gulp.dest('./src/css/')) //输出都硬盘

})

//底部css
gulp.task('wfooterSass',function(){

    gulp.src("./src/sass/footer.scss") //得到文件流

    .pipe(sass({outputStyle:'compact'}))//编译后的文件流

    .pipe(gulp.dest('./src/css/')) //输出都硬盘

})

//登录
gulp.task('wloginSass',function(){

    gulp.src("./src/sass/login.scss") //得到文件流

    .pipe(sass({outputStyle:'compact'}))//编译后的文件流

    .pipe(gulp.dest('./src/css/')) //输出都硬盘

})

//注册
gulp.task('wsignInSass',function(){

    gulp.src("./src/sass/signIn.scss") //得到文件流

    .pipe(sass({outputStyle:'compact'}))//编译后的文件流

    .pipe(gulp.dest('./src/css/')) //输出都硬盘

})

//列表页
gulp.task('wgoodsSass',function(){

    gulp.src("./src/sass/goodslist.scss") //得到文件流

    .pipe(sass({outputStyle:'compact'}))//编译后的文件流

    .pipe(gulp.dest('./src/css/')) //输出都硬盘

})

//商品详情
gulp.task('wgoodSass',function(){

    gulp.src("./src/sass/good.scss") //得到文件流

    .pipe(sass({outputStyle:'compact'}))//编译后的文件流

    .pipe(gulp.dest('./src/css/')) //输出都硬盘

})

//购物车
gulp.task('wcarSass',function(){

    gulp.src("./src/sass/car.scss") //得到文件流

    .pipe(sass({outputStyle:'compact'}))//编译后的文件流

    .pipe(gulp.dest('./src/css/')) //输出都硬盘

})


//创建监听任务
gulp.task('jt',function(){
    // browsersync({
    //     port:1003,
    //     files:['./src/**/*.html','./src/css/*.css']
    // })
    gulp.watch("./src/sass/header.scss",['wheaderSass'])
})


//浏览器同步
// var browserSync=require("browser-sync");
gulp.task('server', function() {
  browserSync({
    // server: {
    //   baseDir: ['dist']
    // },
    port:1003,
    files:['./src/**/*.html','./src/**/*.css']
  }, function(err, bs) {
    console.log(bs.options.getIn(["urls", "local"]));
  });

    gulp.watch('./src/sass/*.scss',['compileSass']);
});

// 创建一个gulp任务：编译sass
gulp.task('compileSass',function(){
    // 查找sass文件
    gulp.src('./src/sass/*.scss')   //得到文件流（文件在内存中的状态）scss

    // 通过管道传输
    // 编译
    .pipe(sass({outputStyle:'compact'}).on('error', sass.logError))                        //编译后的文件流 css

    // 输出到硬盘
    .pipe(gulp.dest('./src/css/'))
});
