/** Packages to install
 *  gulp gulp-sass gulp-minify-css gulp-autoprefixer
 */


const gulp= require('gulp');
const autoprefixer= require('gulp-autoprefixer');
const sass= require('gulp-sass');
const minify= require('gulp-minify-css');


const BUILD_DIR= "./css";
const FILE_DIR= "./scss";


function compileSASS() {
	return gulp.src(`${FILE_DIR}/*.scss`)
				.pipe(sass())
				.pipe(autoprefixer())
				.pipe(minify())
				.pipe(gulp.dest(`${BUILD_DIR}/css/`));
}

function watchSASS() {
	gulp.watch(`${FILE_DIR}/**/*.scss`, ['buildSASS']);
}


gulp.task('buildSASS', compileSASS);
gulp.task('watchSASS', ['buildSASS'], watchSASS);

gulp.task('default', ['watchSASS']);