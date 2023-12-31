/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    })

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first() pega o primeiro produto da lista
            //.last() pega o último produto da lista
            //.eq(3) pega o terceiro produto da lista
            .eq(4)
            .click()
    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3

        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    })
})