import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

Given("I am on the homepage", () => {
  cy.visit('/').viewport('macbook-16')
});
When("I have scrolled to the industry section", () => {
  cy.get(".industry-section").scrollIntoView();
});
Then("the user should see the industry section", () => {
  cy.get(".industry-section").should("be.visible");
});
And("the industry section should have the following elements:", (dataTable) => {
  console.log('data',dataTable.hashes())
  dataTable.hashes().forEach(row => {
    cy.get(row.element).invoke("css", row.property).should("contain", row.value);
  });
});