/* eslint-disable no-undef */
///<reference types="cypress" />

describe('Analisys',()=>{
    
    it('caso de uso de análise',()=>{
        cy.visit('http://localhost:8081/#/adminLogin')
        cy.get('input[name=email]').type('iagofreitas05@gmail.com');
        cy.get('input[name=password]').type('123');
        cy.contains('acessar').click();
        cy.get('.swal-button').click()

        cy.get('#startPeriod').type('2021-10-11')
        cy.get('#endsPeriod').type('2021-11-11')
        cy.contains('pesquisar').click()
        cy.get('.swal-button').click()
        cy.pause()



        cy.get('#startPeriod').type('2021-10-30')
        cy.get('#endsPeriod').type('2021-11-11')
        cy.contains('pesquisar').click()
        cy.get('.swal-button').click()
        cy.pause()

        cy.get('#startPeriod').type('2021-10-20')
        cy.get('#endsPeriod').type('2021-11-05')
        cy.contains('pesquisar').click()
        cy.get('.swal-button').click()
        cy.pause()

    });
});