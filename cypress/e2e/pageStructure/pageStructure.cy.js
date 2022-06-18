import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

Given("I am on the homepage", () => {
  cy.visit('/').viewport('macbook-16')
});
When("I view the entire page", () => {
  cy.get("body").should("be.visible");
});
Then("I should see the following elements:", (dataTable) => {
  dataTable.hashes().forEach(row => {
    cy.get(row.class).scrollIntoView().should("be.visible");
  });
});