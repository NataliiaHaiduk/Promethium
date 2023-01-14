/// <reference types="cypress"/>


import HomePage from "../PageObjects/HomePage.js";
import SignUpPage from "../PageObjects/SignUpPage.js";
import ThankYouPage from "../PageObjects/ThankYouPage.js";
import { faker } from '@faker-js/faker';

// const API_BASE_URL = Cypress.env("apiBaseUrl");
// const apiData = require("../../fixtures/apiData.json");

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

    it.only('TC2 Verify sign up', function () {

        homePage.clickTryNowBtn();
        cy.url().should('include', this.data.signUpURL);

        signUpPage.clickSignUpBtn();

        //fix waiter
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
        //need to use random
        //signUpPage.fillJobFunction(this.data.jobFunction[Math.floor(Math.random() * 3)]);
        signUpPage.fillJobFunction(this.data.jobFunction[0]);
        signUpPage.clickSignUpBtn();

        cy.wait(30000);
        // cy.intercept(signUpPage.elements.getSignUpLoadingBtn()).as('signUpLoadingBtn')
        // cy.wait('@signUpLoadingBtn').should('not.be.visible');
        //signUpPage.waitLoadingEnd();
        

        thankYouPage.elements.getTitle().then(($el) => {
            expect($el).to.have.text(this.thankYou.titleText);
        });

        //maybe will be bettet to wait for api response
        // it("verify response has lastName 'Test' and not empty", () => {
        //     createResponse().then((response) => {
        //         expect(response.body.booking.lastname)
        //             .to.equal("Test")
        //             .to.be.a("string")
        //             .to.not.be.empty;
        //     });
        // });

        cy.url().should('include', userEmail);

    });

    // From the Home Page, click on Try Now, click Sign Up button and messages of "if required" 
    // should appear on each field

    // From the Home Page, click on Try Now, set the fields, and click Sign Up button. 
    // On the Sign Up button should appear a loading icon, wait until finish 
    // and new URL should appear indicating "Thank you for signing up" and with the URL. 
    // On the URL should appear /user/confirmation?email=

});