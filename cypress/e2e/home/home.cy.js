import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';


  Given("I am on the home page", () => {
    cy.visit("http://localhost:8080/");
  });
  When("I view the page", () => {
    cy.get("body").should("be.visible");
  });
  Then("I should see the page", () => {
    cy.get(".hero-unit h1").should("have.text", "Explore our sectors");
  });