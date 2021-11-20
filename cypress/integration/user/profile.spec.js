/* eslint-disable no-undef */
///<reference types="cypress" />

describe('profile',()=>{
    
    it('Profile edit',()=>{
        cy.visit('http://localhost:8081/#/login')
        cy.get('#email').type('iagofreitas@outlook.com');
        cy.get('#password').type('123');
        cy.contains('Login').click();
        cy.get('.swal-button').click()

        //dados pessoais
        cy.visit('http://localhost:8080/#/Profile')
        cy.get('input[name=edit-name]').type('Iago');
        cy.get('input[name=edit-lastname]').type('Freitas Cardoso de Souza');
        cy.get('input[name=edit-date]').type('2020-01-18')
        cy.get('input[name=edit-phone]').type('11968495758')
        cy.get('#edit-gender').select('masculino')
        cy.get('input[name=edit-cpf]').type('48100563845')
        cy.get('input[name=edit-email]').type('iagofreitas@outlook.com')
        cy.get('input[name=edit-password]').type('123')
        cy.get('input[name=edit-address-name]').type('Casa do Iago')
        cy.get('input[name=edit-pais]').type('Brazil')
        cy.get('input[name=edit-city]').type('Mogi das Cruzes')
        cy.get('#edit-state').select('Goiás')
        cy.get('input[name=edit-address-type]').type('Rua')
        cy.get('input[name=edit-address]').type('Rua das Colves')
        cy.get('input[name=edit-number]').type('123')
        cy.get('input[name=edit-complement').type('apartamento 2 305')
        cy.get('input[name=edit-cep').type('08773535')
        cy.get('input[name=edit-obs').type('nenhuma')
        cy.get('#save').click()

        //desativação
        cy.get('.swal-button').click()
        cy.get('#desativar').click()
        cy.get('.swal-button--danger').click()

        //adição de cartão
        cy.get('.swal-button').click()
        cy.get('#new-credit-card').click()
        cy.get('input[name=add-card_number]').type('1233 4523 5432 2344')
        cy.get('input[name=add-card_cvv]').type('123')
        cy.get('input[name=add-card_flag]').type('mastercad')
        cy.get('input[name=add-card_date]').type('11/28')
        cy.get('input[name=add-card_name]').type('IAGO F C SOUZA')
        cy.get("#save_new_card").click()
        cy.get('.swal-button').click()

        //adição endereço de entrega
        cy.get("#new-deliver-address").click();
        cy.get('input[name=add-address-name]').type('Casa do Iago')
        cy.get('input[name=add-pais]').type('Brazil')
        cy.get('input[name=add-city]').type('Mogi das Cruzes')
        cy.get('#add-state').select('Goiás')
        cy.get('input[name=add-address-type]').type('Rua')
        cy.get('input[name=add-address]').type('Rua das Colves')
        cy.get('input[name=add-number]').type('1')
        cy.get('input[name=add-complement').type('apartamento 2 305')
        cy.get('input[name=add-cep').type('08773535')
        cy.get('input[name=add-obs').type('nenhuma')
        cy.get("#button_new_address").click()
        cy.get('.swal-button').click()

        //edição de endereço de entrega
        cy.get("#button_edit_address").click();
        cy.get('input[name=edit-deliver-address-name]').type('Casa do Iago')
        cy.get('input[name=edit-deliver-pais]').type('Brazil')
        cy.get('input[name=edit-deliver-city]').type('Mogi das Cruzes')
        cy.get('#edit-deliver-state').select('Goiás')
        cy.get('input[name=edit-deliver-address-type]').type('Rua')
        cy.get('input[name=edit-deliver-address]').type('Rua das Colves')
        cy.get('input[name=edit-deliver-number]').type('1')
        cy.get('input[name=edit-deliver-complement').type('apartamento 2 305')
        cy.get('input[name=edit-deliver-cep').type('08773535')
        cy.get('input[name=edit-deliver-obs').type('nenhuma')
        cy.get("#button_save_edition").click()
        cy.get('.swal-button').click()

    });
});