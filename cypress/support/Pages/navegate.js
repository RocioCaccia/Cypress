class navegate{
    
    navegarAlSitio = (element) =>{
        cy.fixture("navegate.json").then((locator)=> {
            cy.visit(locator.urlGoogle)
        })
    }
}

export default new navegate();