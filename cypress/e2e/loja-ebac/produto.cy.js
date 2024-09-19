/// <reference types="cypress" />

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Seleciona um produto na lista', () => {
        cy.get('.product-block').first().click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });
});