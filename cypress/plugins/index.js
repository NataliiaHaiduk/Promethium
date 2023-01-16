//njnnk
// const fs = require('fs')
// const path = require('path')
// const pdf = require('pdf-parse');

// const repoRoot = path.join(__dirname, '..', '..')

// const parsePdf = async (pdfName) => {
//   const pdfPathname = path.join(repoRoot, pdfName)
//   let dataBuffer = fs.readFileSync(pdfPathname);
//   return await pdf(dataBuffer) 
// }


// Stanislav Ivanov, [Nov 11, 2021 at 07:24:03 (Nov 11, 2021 at 07:24:10)]:
// у меня так сделан парсинг пдфок
// в папке plugins файл index.js

// я объявляю таск

// on('task', {
//         getPdfContent(pdfName) {
//             return parsePdf(pdfName)
//         }
//     });

// const parsePdf = async (pdfName) => {
//     let dataBuffer = fs.readFileSync(pdfName);
//     return await pdf(dataBuffer);
// }

// fs это либа ноды которую надо импортнуть

// соответственно там у fs есть методы для чтения папок ещё и чтения файлов

// читаешь папку со спеками и названия спек файлов отдаёшь ретурном и таким образом получаешь имена

// потом пишешь блок в котором парсишь каждый спек файл и получаешь от туда названия тестов

// придётся поморочиться конечно. и мб есть способ проще

// но в принципе и это не так чтоб особо сложно должно быть


// const fs = require('fs')
// const path = require('path')
// const pdf = require('pdf-parse');

// const repoRoot = path.join(__dirname, '..', '..')

// export const parsePdf = async (pdfName) => {
//   const pdfPathname = path.join(repoRoot, pdfName)
//   let dataBuffer = fs.readFileSync(pdfPathname);
//   return await pdf(dataBuffer) 
// }
 
//export default parsePdf;

// const fs = require("fs");
// const path = require('path')
// const pdf = require('pdf-parse');

// export const readPdf = (pathToPdf) => {

//   return new Promise((resolve) => {
//     const pdfPath = path.resolve(pathToPdf)
//     let dataBuffer = fs.readFileSync(pdfPath);
//     pdf(dataBuffer).then(function ({ text }) {

//       resolve(text)

//     });
//   })

// }