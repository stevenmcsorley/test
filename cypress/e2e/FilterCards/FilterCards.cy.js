import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given ("I have scrolled to the cards section", () => {
    cy.visit("/");
    cy.get(".grid-section").scrollIntoView();
});
When ("I filter cards by {string}", (attribute) => {
    cy.get(".industry").select(attribute).should("have.value", attribute);
});
Then ("I should see only cards with the {string} attribute of {string}", () => {
    cy.get("div.grid-section > div > div.card").not('.visualhidden.hidden').should("have.length", 3);
});

When ("I then filter cards by {string}", (attribute) => {
    cy.get(".industry").select(attribute).should("have.value", attribute);
});
Then ("I should see only cards with the {string} attribute of {string}", () => {
    cy.get("div.grid-section > div > div.card").not('.visualhidden.hidden').should("have.length", 3);
});

When ("I then filter cards again by {string}", (attribute) => {
    cy.get(".industry").select(attribute).should("have.value", attribute);
});
Then ("I should see only cards with the {string} attribute of {string}", () => {
    cy.get("div.grid-section > div > div.card").not('.visualhidden.hidden').should("have.length", 3);
});




