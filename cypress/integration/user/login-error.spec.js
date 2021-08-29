/* eslint-disable no-undef */
///<reference types="cypress" />

describe('LoginError',()=>{

    it('Realiza login com erro',()=>{
        cy.visit('http://localhost:8081/#/login')
        cy.get('input[name=email]').type('testedeerro@erro.com');
        cy.get('input[name=password]').type('123');
        cy.contains('acessar').click();
    });
});