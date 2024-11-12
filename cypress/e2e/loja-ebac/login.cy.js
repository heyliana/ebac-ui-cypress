/// <reference types="cypress" />
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    it('Login com sucesso', () => {
        cy.get('#username').type('liana.test@cypress.com')
        cy.get('#password').type('algo@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, liana.test')
    });

    it('Mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('annli.testadora@teste.com')
        cy.get('#password').type('algo@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
    });

    it('Mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('liana.test@cypress.com')
        cy.get('#password').type('algg@234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Perdeu a senha?')
    });

    it('Login com sucesso - usando fixtures', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha)
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, liana.test')
        })
    })

    it('Login com sucesso - usando comandos', () => {
        cy.login('liana.test@cypress.com', "algo@123")
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, liana.test')
    })


});