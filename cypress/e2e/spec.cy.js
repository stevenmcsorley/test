describe('Test', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/');
  })


it('displays 9 cards with titles', () => {
  cy.get('.card').should('have.length', 9)
  cy.get('.card:nth-child(1) > h2').first().should('have.text', 'Industrial manufacturing')
  cy.get('.card:nth-child(2) > h2').last().should('have.text', 'Mining & metals')
  cy.get('.card:nth-child(3) > h2').last().should('have.text', 'Civil Aviation')
  cy.get('.card:nth-child(4) > h2').first().should('have.text', 'Industrial manufacturing')
  cy.get('.card:nth-child(5) > h2').first().should('have.text', 'Mining & metals')
  cy.get('.card:nth-child(6) > h2').first().should('have.text', 'Civil Aviation')
  cy.get('.card:nth-child(7) > h2').first().should('have.text', 'Industrial manufacturing')
  cy.get('.card:nth-child(8) > h2').first().should('have.text', 'Mining & metals')
  cy.get('.card:nth-child(9) > h2').first().should('have.text', 'Civil Aviation')
})

})