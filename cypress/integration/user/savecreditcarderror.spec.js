/* eslint-disable no-undef */
///<reference types="cypress" />

describe('creditcard error',()=>{

    it('creditcard error ',()=>{
        //adição de cartão
        cy.visit('http://localhost:8081/#/login')
        cy.get('#email').type('iagofreitas@outlook.com');
        cy.get('#password').type('123');
        cy.contains('Login').click();
        cy.get('.swal-button').click()
        cy.get('#new-credit-card').click()
        cy.get('input[name=add-card_number]').type('1233 4523 5432 2344')
        //cy.get('input[name=add-card_cvv]').type(' ')
        //cy.get('input[name=add-card_flag]').type(' ')
        cy.get('input[name=add-card_date]').type('11/28')
        cy.get('input[name=add-card_name]').type('IAGO F C SOUZA')
        cy.get("#save_new_card").click()
    });
});