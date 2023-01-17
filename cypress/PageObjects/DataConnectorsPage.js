class  DataConnectorsPage {

    elements = {
        getDatabaseSubTitleItemImg: () => cy.get('[data-mesh-id="comp-ktbxs380inlineContent-gridContainer"] wix-image'),
        getDatabaseSubTitleItemName: () => cy.get('[data-mesh-id="comp-ktbxs380inlineContent-gridContainer"] span')
    }

};
 
export default DataConnectorsPage;
