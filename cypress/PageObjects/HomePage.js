class HomePage {

    elements = {

        getLogo: () => cy.get('#img_comp-jixmod45 img'),
        getTitleFirst: () => cy.get('#comp-l5u6mahm3'),
        getTitleSecond: () => cy.get('div#comp-l5u6mahn4'),
        getTryNowBtn: () => cy.get('span.M3I7Z2')

    };

    clickTryNowBtn () {
        getTryNowBtn().click();
    };

};

export default HomePage;