	//在项目根目录下创建gulpfile.js文件
	//安装gulp
		//npm install gulp -g				先全局安装
		//npm install gulp --save-dev		安装到项目开发依赖

	//安装插件
		//npm install gulp-stylus --save-dev		编译stylus的插件
		//npm install gulp-minify-css --save-dev	压缩css文件
		//npm install gulp-uglify --save-dev		压缩js文件

	//在gulpfile.js编写

	//首先引入gulp和gulp-stylus模块（或其他插件）
	var gulp=require('gulp');
	var stylus=require('gulp-stylus');
	var minifycss=require('gulp-minify-css');
	var uglify=require('gulp-uglify');

	var browserSync=require('browser-sync' ).create();
	var reload=browserSync.reload;
	var nodemon=require('gulp-nodemon');

	gulp.task('nodemon',function(ab){
		var ft=false;
		return nodemon({
			script:'./app.js'
		} ).on('start',function(){
			if(!ft){
				ab();
				ft = true;
			}
		})
	});

	gulp.task('browserSync',['nodemon'],function(){
		browserSync.init({
			proxy:{
				target:'http://127.0.0.1:9999'
			},
			files:['*'],
			port:9888,
			open:false,
			notify:false
		})
	});

	//创建编译stylus的任务
	gulp.task('stylus',function(){
		return gulp.src('./stylus/**/*.styl')	//需要编译的文件
			.pipe(stylus())						//执行编译方法
			.pipe(gulp.dest('./public/css'));	//编译后输出的目录
	});

	//压缩css文件
	gulp.task('minifycss',['stylus'],function(){
		return gulp.src('./public/css/**/*.css')	//需要编译的文件
			    .pipe(minifycss())						//执行编译方法
			    .pipe(gulp.dest('./public/mincss'));	//编译后输出的目录
	});

	//压缩js文件
	gulp.task('uglify',function(){
		return gulp.src('./public/js/**/*.js')	//需要编译的文件
			.pipe(uglify())						//执行编译方法
			.pipe(gulp.dest('./public/minjs'));	//编译后输出的目录
	});

	gulp.task('watcher',['browserSync','stylus','uglify'],function(){
		gulp.watch('./stylus/**/*.styl',['stylus']);
		gulp.watch('./public/js/**/*.js',['uglify']);

		gulp.watch(['./public/css/**/*.css','./public/minjg/**/*.js'] ).on('change',function(){
			reload();
		})

	});

	//先执行es6，执行完后再执行minjs
	gulp.task('minjs',function(){
		console.log('this is minjs')
	});
	//创建一个执行其他任务的任务
	gulp.task('all',['logs','es6','css'],function(){
		console.log('this is all')
	});
	//创建一个default任务
	gulp.task('default',function(){
		console.log('this default')
	});