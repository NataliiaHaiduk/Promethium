const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
const { verifyDownloadTasks } = require('cy-verify-downloads');
//const { getPdfContent } = require('parsePdf');
//import parsePdf  from '../plugins/index.js';
//import  readPdf  from '../plugins/index.js'
//import {readPdf} from '../cypress/scripts/readPdf.js';
//const { readPdf }  = require ('cypress')
const {fs} = require('fs');
const {pdf} = require('pdf-parse');

//import HomePage from "../PageObjects/HomePage.js";
//const {getPdfContent} = require('cypress/plugins/index.js')
//const { readPdf } = require('pdf-parse')
// const pdf = require('pdf-parse');
// const fs = require('fs');
// let dataBuffer = fs.readFileSync('filePath');

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  defaultCommandTimeout: 7000,
  e2e: {
    baseUrl: 'http://promethium.ai/',
    setupNodeEvents(on, config) {
      on('task', {downloadFile}),
      on('task', {verifyDownloadTasks}),
      on('task', {pathToPdf (pathtoPdf){
        let dataBuffer = fs.readFileSync('pathToPdf')
        pdf(dataBuffer).then(function(data) {
        return data.text
        })
      }}
    )},
}});





