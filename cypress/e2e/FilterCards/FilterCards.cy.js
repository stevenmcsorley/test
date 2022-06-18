import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given ("I have scrolled to the cards section", () => {
    cy.visit("/");
    cy.get(".industry-section").scrollIntoView();
});
When ("I filter cards by {string}", (attribute) => {
    cy.get(".industry").select("aviation").should("have.value", attribute);
});
Then ("I should see only cards with the {string} attribute of {string}", (industry) => {
    cy.get("div.industry-section > div > div.card").not('.visualhidden.hidden').should("have.length", 3);
});



