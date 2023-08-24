class busqueda{
    
    buscarAut = (element) =>{
        cy.get('[name="q"]').type('automatizacion');  
    }

    enter = (element) =>{
        cy.get('[name="q"]').type('{enter}');
    }

    verificarURL = (element) =>{
        cy.url().should('include', 'q=automatizacion');
    }

    seleccionaLink = (element) =>{
        cy.get('h3').contains('wikipedia', { matchCase: false }).eq(0).click();
    }

    realizaScreen = (element) =>{
        cy.origin('https://es.wikipedia.org', () => {
        cy.get('p').contains('año 270');  
        // Toma una captura de pantalla de la parte visible de la página
        cy.screenshot('captura_de_pantalla_ano_270');  
    }) 
    }
    
}

export default new busqueda();