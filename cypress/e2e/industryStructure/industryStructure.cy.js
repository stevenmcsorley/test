import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

Given("I am on the homepage", () => {
  cy.visit('/').viewport('macbook-16')
});
When("I have scrolled to the grid section", () => {
  cy.get(".grid-section").scrollIntoView();
});
Then("the user should see the grid section", () => {
  cy.get(".grid-section").should("be.visible");
});
And("the grid section should have the following elements:", (dataTable) => {
  console.log('data',dataTable.hashes())
  dataTable.hashes().forEach(row => {
    cy.get(row.element).invoke("css", row.property).should("contain", row.value);
  });
});