/// <reference types="cypress" />

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Login com sucesso', () => {
        cy.get('#username').type('annli.cytest@teste.com')
        cy.get('#password').type('algo@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, annli.cytest')
    });

    it('Mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('annli.testadora@teste.com')
        cy.get('#password').type('algo@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
    });

    it('Mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('annli.cytest@teste.com')
        cy.get('#password').type('algg@234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Perdeu a senha?')
    });

});