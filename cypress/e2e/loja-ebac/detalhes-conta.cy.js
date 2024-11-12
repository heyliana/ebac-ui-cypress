/// <reference types="cypress"/>

describe('Funcionalidade: Detalhes da conta', () => {
    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then( login => {
            cy.login(login.usuario, login.senha)
        })
    });

    it('Alterar detalhes da conta com sucesso', () => {
        cy.detalhesConta('Liana', 'Kahil', 'Liana')
        cy.get('.woocommerce-message').should('contain', 'modificados com sucesso.')
    })
});