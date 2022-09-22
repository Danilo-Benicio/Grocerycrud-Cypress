/// <reference types="cypress"/>

describe('empty spec', () => {
    it('Cadastro dados validos', () => {
      cy.visit('https://www.grocerycrud.com/v1.x/demo/bootstrap_theme')
    
      cy.get('.floatL.t5 > .btn').click()
      cy.get('[name=customerName]').type('Danilo')
      cy.get('[name=contactLastName]').type('Benicio')
      cy.get('[name=contactFirstName]').type('nilo')
      cy.get('[name=phone]').type('11912345678')
      cy.get('[name=addressLine1]').type('barueri')
      cy.get('[name=addressLine2]').type('barueri')
      cy.get('[name=city]').type('santana')
      cy.get('[name=state]').type('Sao paulo')
      cy.get('[name=postalCode]').type('06500123')
      cy.get('[name=country]').type('Brasil')
      cy.get('[class="chosen-container chosen-container-single"]').type('Bott{enter}')
      cy.get('[name=creditLimit]').type('100000')
      cy.get('[name=deleted]').type('nao')
      cy.get('#form-button-save').click()
      cy.get('#report-success').should('have.class', 'report-div success bg-success')
    })
  })