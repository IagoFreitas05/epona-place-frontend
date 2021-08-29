/* eslint-disable no-undef */
///<reference types="cypress" />

describe('Login',()=>{
    
    it('Realiza login',()=>{
        cy.visit('http://localhost:8081/#/login')
        cy.get('input[name=email]').type('iagofreitas@outlook.com');
        cy.get('input[name=password]').type('123');
        cy.contains('acessar').click();
    });
});