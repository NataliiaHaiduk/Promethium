class SignUpPage {

    elements = {

        getSignUpBtn: () => cy.get('.submit_button_wrapper___2rZNT'),
        getSignUpLoadingBtn: () => cy.get('span.ant-btn-loading-icon'),
        getAlertMsg: () => cy.get('div[role="alert"]'),
        getCompanyEmailInput: () => cy.get('input#UserRegister_root_user'),
        getFirstNameInput: () => cy.get('input#UserRegister_first_name'),
        getLastNameInput: () => cy.get('input#UserRegister_last_name'),
        getCompanyNameInput: () => cy.get('input#UserRegister_company_name'),
        getJobFunctionInput: () => cy.get('input#UserRegister_job_function'),
        getJobFunctionItem: () => cy.get('[title]')
        
    };

    clickSignUpBtn () {
        this.elements.getSignUpBtn().click();
    };

    fillCompanyEmail (companyEmail) {
        this.elements.getCompanyEmailInput().type(companyEmail);
    };

    fillFirstName (firstName) {
        this.elements.getFirstNameInput().type(firstName);
    };

    fillLastName (lastName) {
        this.elements.getLastNameInput().type(lastName);
    };

    fillCompanyName (companyName) {
        this.elements.getCompanyNameInput().type(companyName);
    };

    fillJobFunction (jobFunction) {
        this.elements.getJobFunctionInput().click();
        this.elements.getJobFunctionItem().contains(jobFunction).click();
    };

    //need better way to wait for element spinning signh up button
    // waitLoadingEnd () {
    //     //fix this selector
    //     cy.intercept('span.ant-btn-loading-icon').as('signUpLoadingBtn');
    //     cy.wait(20000)
    //     cy.wait('@signUpLoadingBtn', 100000 );
    // }

};

export default SignUpPage;