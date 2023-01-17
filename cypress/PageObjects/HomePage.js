class HomePage {

    elements = {

        getLogo: () => cy.get('#img_comp-jixmod45 img'),
        getTitleFirst: () => cy.get('#comp-l5u6mahm3'),
        getTitleSecond: () => cy.get('div#comp-l5u6mahn4'),
        getTryNowBtn: () => cy.get('#comp-jixneksf a'),
        getProductMenu: () => cy.get('#comp-jwtopy710label'),
        getProductDataConnectorsSubMenu: () => cy.get('#comp-jwtopy710 ul a[href="https://www.pm61data.com/promethium-data-connectors"]')
       
    };

    clickTryNowBtn () {
        this.elements.getTryNowBtn().invoke('removeAttr', 'target').click();
    };

    clickProductDataConnectorsSubMenu () {
        this.elements.getProductMenu().realHover().then(() => {
            this.elements.getProductDataConnectorsSubMenu().click({force: true});
        });
    };

};

export default HomePage;