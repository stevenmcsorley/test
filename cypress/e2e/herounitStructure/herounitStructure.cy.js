import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

Given("I am on the homepage", () => {
  cy.visit('/').viewport('macbook-16')
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