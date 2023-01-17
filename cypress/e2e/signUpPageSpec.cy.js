/// <reference types="cypress"/>


import HomePage from "../PageObjects/HomePage.js";
import SignUpPage from "../PageObjects/SignUpPage.js";
import ThankYouPage from "../PageObjects/ThankYouPage.js";
import { faker } from '@faker-js/faker';

const homePage = new HomePage();
const signUpPage = new SignUpPage();
const thankYouPage = new ThankYouPage();

describe('HomePage', () => {

    beforeEach(function () {

        cy.visit('/');

        cy.fixture('signUpPage').then(data => {
            this.data = data;
        });

        cy.fixture('thankYouPage').then(thankYou => {
            this.thankYou = thankYou;
        });

    });

    it('TC2 Verify sign up', function () {

        homePage.clickTryNowBtn();
        cy.url().should('include', this.data.signUpURL);

        signUpPage.clickSignUpBtn();

        cy.wait(200);
        signUpPage.elements.getAlertMsg().should('have.length', this.data.requiredFieldCount);
        signUpPage.elements.getAlertMsg().each(() => {
            signUpPage.elements.getAlertMsg().should('include.text', this.data.arertEmptyRequiredInput);
        });
        
        let userEmail = faker.word.adjective() + "bla@" + faker.internet.domainName();
        signUpPage.fillCompanyEmail(userEmail);
        
        signUpPage.fillFirstName(faker.name.firstName());
        signUpPage.fillLastName(faker.name.lastName());
        signUpPage.fillCompanyName(faker.name.jobArea());
        signUpPage.fillJobFunction(this.data.jobFunction[Math.floor(Math.random() * 3)]);
        signUpPage.clickSignUpBtn();

        //access to the website is blocked so I do not have a chance to check the api. But would implement close to this
        // cy.intercept(signUpPage.elements.getSignUpLoadingBtn()).as('signUpLoadingBtn');
        // cy.wait('@signUpLoadingBtn').its('request.response...pathToValue').should('include', 'success..dontRememberExactly');
        
        cy.wait(30000); //insted would use commented code from lines 52-53

        thankYouPage.elements.getTitle().then(($el) => {
            expect($el).to.have.text(this.thankYou.titleText);
        });
        cy.url().should('include', userEmail);

    });
});