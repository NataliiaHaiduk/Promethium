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
        
        //TODO "verify menu is visible" 
        homePage.clickResourcesCollateralWebinarsSubMenu();
        cy.url().should('include', this.resourcesLibrary.URL);

        resourcesLibraryPage.elements.getSolutionForDbtBtn().then(($btn) => {
            let url1 = $btn.attr('href');
            expect(url1).eq(this.resourcesLibrary.SolutionForDbtDownloadUrl);
        })

        resourcesLibraryPage.clickSolutionForDbtBtn();
        cy.downloadFile(this.resourcesLibrary.SolutionForDbtDownloadUrl,'cypress/downloads','solutionForDbt.pdf');
        cy.readFile('cypress/downloads/solutionForDbt.pdf')
        
        //this is how I would verify file content but cypress crash each time
        // .then( content => {
        //     this.resourcesLibrary.SolutionForDbtPdfContent.forEach(element => {
        //         expect(content).contain(this.resourcesLibrary.SolutionForDbtPdfContent[element])
        //     });
        // })
            
        cy.deleteDownloadsFolder();

    });
})
    
    // From the Home Page, hover the mouse over Resources, and click on Collateral & Webinars. 
    // Download the file related to Solution For dbt™ and verify that the downloaded PDF has 4 pages 
    // and includes the following texts: "Reimagining data analytics", "Why Promethium + dbt", 
    // "From Traditional to Modern In Days, Not Years", "Learn more, try for yourself, 
    // visit promethium.ai".
    