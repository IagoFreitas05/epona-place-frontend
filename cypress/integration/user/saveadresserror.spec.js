/* eslint-disable no-undef */
///<reference types="cypress" />

describe('save address error',()=>{

    it('save address error',()=>{
        cy.visit('http://localhost:8081/#/login')
        cy.get('input[name=email]').type('iagofreitas@outlook.com');
        cy.get('input[name=password]').type('123');
        cy.contains('acessar').click();
        cy.get('.swal-button').click()
        //adição endereço de entrega
        cy.get("#new-deliver-address").click();
        cy.get('input[name=add-address-name]').type('Casa do Iago')
        cy.get('input[name=add-pais]').type('Brazil')
        cy.get('input[name=add-city]').type('Mogi das Cruzes')
        cy.get('#add-state').select('Goiás')
        //cy.get('input[name=add-address-type]').type('Rua')
        //cy.get('input[name=add-address]').type('Rua das Colves')
        cy.get('input[name=add-number]').type('1')
        cy.get('input[name=add-complement').type('apartamento 2 305')
        cy.get('input[name=add-cep').type('08773535')
        cy.get('input[name=add-obs').type('nenhuma')
        cy.get("#button_new_address").click()
    });
});