/// <reference types="cypress"/>


import HomePage from "../PageObjects/HomePage.js";
import DataConnectorsPage from "../PageObjects/DataConnectorsPage.js";

const homePage = new HomePage();
const dataConnectorsPage = new DataConnectorsPage();

describe('HomePage', () => {

    beforeEach(function () {

        cy.visit('/');

        cy.fixture('homePage').then(data => {
            this.data = data;
        });

        cy.fixture('dataConnectorsPage').then(dataConnectors => {
            this.dataConnectors = dataConnectors;
        });

    });

    it('TC3 Verify Database subheading and its content on Data Connectors Page', function () {
        
      
        homePage.clickProductDataConnectorsSubMenu();
        cy.url().should('include', this.dataConnectors.URL);
        dataConnectorsPage.elements.getDatabaseSubTitleItemImg()
            .should('have.length', this.dataConnectors.dataBaseSubTitleItemCount);

        this.dataConnectors.dataBaseSubTitleItemName.forEach(el => {
            dataConnectorsPage.elements.getDatabaseSubTitleItemName().contains(el).should('be.visible')
        });
        
    });

});
