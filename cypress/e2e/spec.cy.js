describe('Test', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/');
  })


it('displays 9 cards with titles', () => {
  cy.get('.card').should('have.length', 9)
  cy.get('.card:nth-child(1) > h2').should('have.text', 'Industrial manufacturing')
  cy.get('.card:nth-child(2) > h2').should('have.text', 'Mining & metals')
  cy.get('.card:nth-child(3) > h2').should('have.text', 'Civil Aviation')
  cy.get('.card:nth-child(4) > h2').should('have.text', 'Industrial manufacturing')
  cy.get('.card:nth-child(5) > h2').should('have.text', 'Mining & metals')
  cy.get('.card:nth-child(6) > h2').should('have.text', 'Civil Aviation')
  cy.get('.card:nth-child(7) > h2').should('have.text', 'Industrial manufacturing')
  cy.get('.card:nth-child(8) > h2').should('have.text', 'Mining & metals')
  cy.get('.card:nth-child(9) > h2').should('have.text', 'Civil Aviation')
})

it('displays 9 cards with descriptions', () => {
  cy.get('.card').should('have.length', 9)
  cy.get('.card:nth-child(1) > p').should('include.text', 'Donec id elit non mi porta')
  cy.get('.card:nth-child(2) > p').should('include.text', 'Donec id elit non mi porta')
  cy.get('.card:nth-child(3) > p').should('include.text', 'Donec id elit non mi porta')
  cy.get('.card:nth-child(4) > p').should('include.text', 'Donec id elit non mi porta')
  cy.get('.card:nth-child(5) > p').should('include.text', 'Donec id elit non mi porta')
  cy.get('.card:nth-child(6) > p').should('include.text', 'Donec id elit non mi porta')
  cy.get('.card:nth-child(7) > p').should('include.text', 'Donec id elit non mi porta')
  cy.get('.card:nth-child(8) > p').should('include.text', 'Donec id elit non mi porta')
  cy.get('.card:nth-child(9) > p').should('include.text', 'Donec id elit non mi porta')

})


it('displays 9 cards with links', () => {
  cy.get('.card').should('have.length', 9)
  cy.get('.card:nth-child(1) > p > a').should('have.attr', 'href', '#')
  cy.get('.card:nth-child(2) > p > a').should('have.attr', 'href', '#')
  cy.get('.card:nth-child(3) > p > a').should('have.attr', 'href', '#')
  cy.get('.card:nth-child(4) > p > a').should('have.attr', 'href', '#')
  cy.get('.card:nth-child(5) > p > a').should('have.attr', 'href', '#')
  cy.get('.card:nth-child(6) > p > a').should('have.attr', 'href', '#')
  cy.get('.card:nth-child(7) > p > a').should('have.attr', 'href', '#')
  cy.get('.card:nth-child(8) > p > a').should('have.attr', 'href', '#')
  cy.get('.card:nth-child(9) > p > a').should('have.attr', 'href', '#')
})

it('displays 9 cards with data-industry attributes', () => {
  cy.get('.card').should('have.length', 9)
  cy.get('.card:nth-child(1)').should('have.attr', 'data-industry', 'manufacturing')
  cy.get('.card:nth-child(2)').should('have.attr', 'data-industry', 'mining')
  cy.get('.card:nth-child(3)').should('have.attr', 'data-industry', 'aviation')
  cy.get('.card:nth-child(4)').should('have.attr', 'data-industry', 'manufacturing')
  cy.get('.card:nth-child(5)').should('have.attr', 'data-industry', 'mining')
  cy.get('.card:nth-child(6)').should('have.attr', 'data-industry', 'aviation')
  cy.get('.card:nth-child(7)').should('have.attr', 'data-industry', 'manufacturing')
  cy.get('.card:nth-child(8)').should('have.attr', 'data-industry', 'mining')
  cy.get('.card:nth-child(9)').should('have.attr', 'data-industry', 'aviation')

})


})