Cypress.Commands.add('addProdutos', (product, size, color, amount) => {
    cy.get('[class="page-numbers"]')
    .contains('4')
    .click()

cy.get('[class="product-block grid"]')
    .contains(product)
    .click()
cy.get('.button-variable-item-' + size).click()
cy.get('.button-variable-item-' + color).click()
cy.get('[class="input-text qty text"]')
    .clear()
    .type(amount)
})