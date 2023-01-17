/// <reference types="cypress"/>


import HomePage from "../PageObjects/HomePage.js";

const homePage = new HomePage();

describe('HomePage', () => {

    beforeEach(function () {

        cy.visit('/');

        cy.fixture('homePage').then(data => {
            this.data = data;
        });

    });

    it('TC1 Verify logo and page titles', function () {

        homePage.elements.getLogo().should('be.visible');
        homePage.elements.getLogo().invoke('attr', 'src').should('contain', this.data.logoUrl);
                                                                                   
        homePage.elements.getTitleFirst().should('be.visible');
        homePage.elements.getTitleFirst().should('have.text', this.data.titleFirst);

        homePage.elements.getTitleSecond().should('be.visible');
        homePage.elements.getTitleSecond().should('have.text', this.data.titleSecond);
        
    });

});
