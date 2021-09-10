/* eslint-disable no-undef */
///<reference types="cypress" />

describe('addProduct',()=>{

    it('AddProduct',()=>{
        cy.visit('http://localhost:8081/#/store')
        cy.get('input[name=email]').type('iagofreitas@outlook.com');
        cy.get('input[name=password]').type('123');
        cy.contains('acessar').click();
    });
});