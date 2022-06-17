import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
describe("Hero Unit", () => {
  Given(
    "I am on the {string}",
    () => {
      cy.visit("/");
    },
    "I am on the {string}"
  );
  When(
    "I see the {string}",
    () => {
      cy.get(".hero-unit").should("be.visible");
    },
    "I see the hero unit"
  );
  Then(
    "I should see the {string} {string}",
    () => {
      cy.get(".hero-unit")
        .should("have.css", "background-image")
        .and("contain", "forestroad");
    },
    "I should see the {string} {string}"
  );

  Given("I am viewing the {string}", () => {
    cy.visit("/");
  });
  When("I view the {string}", () => {
    cy.get(".hero-unit > .header").should("be.visible");
  });
  Then("I should see the {string} {string}", () => {
    cy.get(".hero-unit >.header > a.btn-primary--outline").should("be.visible");
  });
});
