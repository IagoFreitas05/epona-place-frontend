/* eslint-disable no-undef */
///<reference types="cypress" />

describe('Login',()=>{
    
    it('Realiza login',()=>{
        cy.visit('http://localhost:8080/#/login')
        cy.get('input[name=email]').type('iagofreitas05@gmail.com');
        cy.get('input[name=password]').type('123');
        cy.contains('acessar').click();
    });
});