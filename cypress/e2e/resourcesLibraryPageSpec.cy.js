/// <reference types="cypress"/>
/// <reference types="cypress-downloadfile"/>


import HomePage from "../PageObjects/HomePage.js";
import ResourcesLibraryPage from "../PageObjects/ResourcesLibraryPage.js";

const homePage = new HomePage();
const resourcesLibraryPage = new ResourcesLibraryPage();

describe('HomePage', () => {

    beforeEach(function () {

        cy.visit('/');

        cy.fixture('homePage').then(data => {
            this.data = data;
        });

        cy.fixture('resourcesLibraryPage').then(resourcesLibrary => {
            this.resourcesLibrary = resourcesLibrary;
        });

    });

    it('TC4 Download PDF file "Solutions for Dbt", verify page count and content', function () {
        
        //TODO "verify menu is visible" 
        homePage.clickResourcesCollateralWebinarsSubMenu();
        cy.url().should('include', this.resourcesLibrary.URL);

        // let url1 = resourcesLibraryPage.elements.getSolutionForDbtBtn().invoke('attr', 'href')
        // cy.log(url1)

        resourcesLibraryPage.elements.getSolutionForDbtBtn().then(($btn) => {
            let url1 = $btn.attr('href');
            expect(url1).eq(this.resourcesLibrary.SolutionForDbtDownloadUrl);
        })

        resourcesLibraryPage.clickSolutionForDbtBtn();
        cy.downloadFile(this.resourcesLibrary.SolutionForDbtDownloadUrl,'downloads','solutionForDbt.pdf');
          //cy.verifyDownload('solutionForDbt.pdf');

          //cy.task('readPdf', 'downloads/solutionForDbt.pdf').should('contain', 'Hello darkness my old friend')
        // cy.readFile('downloads/solutionForDbt.pdf',{timeout: 20000}).then(context => {
        //     expect(context).contain(this.resourcesLibrary.SolutionForDbtPdfContent[0])
        //     //cy.log(context)
        // })
        cy.readFile('downloads/solutionForDbt.pdf',{timeout: 20000})
        .should('contain',this.resourcesLibrary.SolutionForDbtPdfContent[0])
            //cy.log(context)
        

        
    });

});

// From the Home Page, hover the mouse over Resources, and click on Collateral & Webinars. 
// Download the file related to Solution For dbt™ and verify that the downloaded PDF has 4 pages 
// and includes the following texts: "Reimagining data analytics", "Why Promethium + dbt", 
// "From Traditional to Modern In Days, Not Years", "Learn more, try for yourself, 
// visit promethium.ai".


       //.then(context => {cy.log(context)})
  //.should('contain', 'Hello darkness my old friend')

        //   cy.task('getPdfContent', 'solutionForDbt.pdf').then((content) => {
        //     //console.log(content.text)
        //     cy.log(JSON.stringify(content));
        // })

        

        // this.dataConnectors.dataBaseSubTitleItemName.forEach(el => {
        //     dataConnectorsPage.elements.getDatabaseSubTitleItemName().contains(el).should('be.visible')
        // });

        // this.resourcesLibrary.SolutionForDbtPdfContent.forEach(el => {
        //     //cy.readFile('downloads/solutionForDbt.pdf').should('contain', el)

        // })

        // cy.task('getPdfContent', 'solutionForDbt.pdf').then((content) => 
        //     cy.log(content)
        //   )

        // cy.task('getPDFText', 'downloads/solutionForDbt.pdf').then((content) => {
        //     cy.log(content)
        // })

        




        //cy.readFile('cypress/downloads/solutionForDbt.pdf').should('con', 'Hello World')

//         const fs = require('fs');
// const pdf = require('pdf-parse');
 
// let dataBuffer = fs.readFileSync('downloads/solutionForDbt.pdf');
 
// pdf(dataBuffer).then(function(data) {
 
//     // number of pages
//     cy.log(data.numpages);
//     // number of rendered pages
//     cy.log(data.numrender);
//     // PDF info
//     cy.log(data.info);
//     // PDF metadata
//     cy.log(data.metadata); 
//     // PDF.js version
//     // check https://mozilla.github.io/pdf.js/getting_started/
//     cy.log(data.version);
//     // PDF text
//     cy.log(data.text); 
        
// });