/* eslint-disable no-undef */
///<reference types="cypress" />

describe('profile',()=>{

    it('Profile edit',()=>{
    //adição de cartão
    cy.visit('http://localhost:8081/#/login')
    cy.get('input[name=email]').type('iagofreitas@outlook.com');
    cy.get('input[name=password]').type('123');
    cy.contains('acessar').click();
    cy.get('.swal-button').click()
    cy.get('#new-credit-card').click()
    cy.get('input[name=add-card_number]').type('1233 4523 5432 2344')
    cy.get('input[name=add-card_cvv]').type('123')
    cy.get('input[name=add-card_flag]').type('mastercad')
    cy.get('input[name=add-card_date]').type('11/28')
    cy.get('input[name=add-card_name]').type('IAGO F C SOUZA')
    cy.get("#save_new_card").click()
    cy.get('.swal-button').click()
    });
});