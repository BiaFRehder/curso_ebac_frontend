/// <reference types="cypress" />

describe('Teste para a página de lista de contatos', () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })
    
    it('Deve renderizar a página principal', () => {
        cy.get('h1').should('contain', 'Agenda de')
    })

    it('Deve adicionar um novo contato', () => {
        cy.get('input[type= "text"]').type('Bianca Fucuda')
        cy.get('input[type= "email"]').type('bianca.fucuda@test.com')
        cy.get('input[type= "tel"]').type('00123456789')

        cy.get('button[type= "submit"]').click()

        cy.get('.contato').last().find('li').first().should('contain', 'Bianca Fucuda')
    })

    it('Deve editar o nome de um contato', () => {
        cy.get('.edit').first().click()

        cy.get('input[type= "text"]').clear().type('Gian Souza')

        cy.get('.alterar').click()

        cy.get('.cTVgex li').first().should('contain', 'Gian Souza')
    })

    it('Deve deletar o último contato', () => {
        cy.get('.contato .delete').last().click()
        
        cy.get('.contato').last().find('li').first().should('not.contain', 'Bianca Fucuda')
    })
})
