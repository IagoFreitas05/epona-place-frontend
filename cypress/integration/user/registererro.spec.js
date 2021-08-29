/* eslint-disable no-undef */
///<reference types="cypress" />

describe('Registrar com erro',()=>{

    it('Realizar cadastro com erro',()=>{
        cy.visit('http://localhost:8081/#/register')
        cy.get('input[name=name]').type('Iago');
        cy.get('input[name=sobrenome]').type('Freitas Cardoso de Souza');
        cy.get('input[name=date]').type('2020-01-18')
        cy.get('input[name=phone]').type('11968495758')
        cy.get('#gender').select('masculino')
        cy.get('input[name=cpf]').type('111')
        cy.get('input[name=email]').type('teste@teste.com')
        cy.get('input[name=password]').type('123')
        cy.get('input[name=logradouro]').type('Rua das Colves')
        cy.get('input[name=number]').type('12')
        cy.get('input[name=city]').type('Mogi das Cruzes')
        cy.get('#state').select('Goiás')
        cy.contains('cadastrar').click();
    });
});