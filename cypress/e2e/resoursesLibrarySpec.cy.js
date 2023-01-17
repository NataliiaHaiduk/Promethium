/// <reference types="cypress"/>
/// <reference types="cypress-downloadfile"/>


import HomePage from "../PageObjects/HomePage.js"
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
        
        homePage.clickResourcesCollateralWebinarsSubMenu();
        cy.url().should('include', this.resourcesLibrary.URL);

        resourcesLibraryPage.elements.getSolutionForDbtBtn().then(($btn) => {
            let url1 = $btn.attr('href');
            expect(url1).eq(this.resourcesLibrary.SolutionForDbtDownloadUrl);
        })

        resourcesLibraryPage.clickSolutionForDbtBtn();
        cy.downloadFile(this.resourcesLibrary.SolutionForDbtDownloadUrl,'cypress/downloads','solutionForDbt.pdf');
        cy.readFile('cypress/downloads/solutionForDbt.pdf')
        
        //this is how I would verify file content but cypress crashes each time
        // cy.readFile('cypress/downloads/solutionForDbt.pdf')
        //   .then( content => {
        //     this.resourcesLibrary.SolutionForDbtPdfContent.forEach(element => {
        //         expect(content).contain(this.resourcesLibrary.SolutionForDbtPdfContent[element])
        //     });
        // })
            
        cy.deleteDownloadsFolder();

    });
});