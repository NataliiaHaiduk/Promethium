class ResourcesLibraryPage {

    elements = {
        getSolutionForDbtBtn: () => cy.get('#comp-khxrjo73__item-l4epj00h a')
    };

    clickSolutionForDbtBtn () {
        this.elements.getSolutionForDbtBtn().invoke('removeAttr', 'target').click();
    }
    
}

export default ResourcesLibraryPage;