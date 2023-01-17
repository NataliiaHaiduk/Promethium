class ThankYouPage{

    elements = {

        getTitle: () => cy.get('.title___30mpn')

    };

    getTitleText () {
       return this.elements.getTitle().invoke('text');
    };

};

export default ThankYouPage;
