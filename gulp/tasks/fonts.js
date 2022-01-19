// import fs, { appendFile } from 'fs';
// import fonter from 'gulp-fonter';
// import ttf2woff2 from 'gulp-ttf2woff2';


// export const otfToTtf = () => {
//     return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
//         .pipe(app.plugins.plumber(
//             app.plugins.notify.onError({
//                 title: "FONTS",
//                 message: "Error: <%= error.message %>"
//             })
//         ))
//         .pipe(fonter({
//             formats: ['woff']
//         }))
//         .pipe(app.gulp.dest(`${app.path.build.fonts}`)
//         .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`)))
//         .pipe(ttf2woff2())
//         .pipe(app.gulp.dest(`${app.path.build.fonts}`));
// }

// export const ttfToWoff= () => {
//     return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
//     .pipe(app.plugins.plumber(
//         app.plugins.notify.onError({
//             title: "FONTS",
//             message: "Error: <%= error.message %>"
//         })
//     ))
//     .pipe(fonter({
//         formats: ['woff']
//     }))
//     .pipe(app.gulp.dest(`${app.path.build.fonts}`)
//     .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`)))
//     .pipe(ttf2woff2())
//     .pipe(app.gulp.dest(`${app.path.build.fonts}`));
// }
// export function fontsStyle(params) {

//     let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
//     if (file_content == '') {
//     fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
//     return fs.readdir(path.build.fonts, function (err, items) {
//     if (items) {
//     let c_fontname;
//     for (var i = 0; i < items.length; i++) {
//     let fontname = items[i].split('.');
//     fontname = fontname[0];
//     if (c_fontname != fontname) {
//         fs.appendFile(fontsFile, `@font-face{\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format ("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`, cb);
//     }
//     c_fontname = fontname;
//     }
//     }
//     })
//     }
//     }
    
//     function cb() { }