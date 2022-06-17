import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
beforeEach(() => {
  cy.visit('/')
})

// Scenario: Hero Unit Structure matches the expected design
// Given I am on the homepage
// When I have scrolled to the hero unit
// Then the user should see the hero unit
// And the hero unit should have the following elements:
//     | Element |
//     | Hero unit |
//     | Hero unit image |
//     | Hero unit text |


Given("I am on the homepage", () => {
  cy.visit('/')
});
When("I have scrolled to the hero unit", () => {
  cy.get(".hero-unit").scrollIntoView();
});
Then("the user should see the hero unit", () => {
  cy.get(".hero-unit").should("be.visible");
});
And("the hero unit should have the following elements:", (dataTable) => {
  console.log('data',dataTable.hashes())
  dataTable.hashes().forEach(row => {
    cy.get(row.element).invoke("css", row.property).should("contain", row.value);
  });
});