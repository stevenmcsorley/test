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

  describe("Full page", () => {
  it("hero-unit should have a title", () => {
    cy.get(".hero-unit h1").should("have.text", "Explore our sectors");
  });

  it("hero-unit should be visible", () => {
    cy.get(".hero-unit").should("be.visible");
  });

  it("hero-unit should have background image", () => {
    cy.get(".hero-unit").should("have.css", "background-image");
  });

  it("hero-unit should have background clip", () => {
    cy.get(".hero-unit").should("have.css", "background-clip");
  });

  it("should have grid", () => {
    cy.get(".grid-2").should("be.visible");
  });

  it("should have grid-item", () => {
    cy.get(".grid-2 > div").should("be.visible");
  });

  it("should have a filter", () => {
    cy.get("[js-data-select]").should("be.visible");
  });

  it("select should have a default value", () => {
    cy.get("[js-data-select]").should("have.value", "all");
  });

  it("select should have a list of options", () => {
    cy.get("[js-data-select] option").should("have.length", 4);
  });

  it("should have a list of cards", () => {
    cy.get("[data-industry]").should("be.visible");
  });

  it("displays 9 cards with titles", () => {
    cy.get(".card").should("have.length", 9);
    cy.get(".card:nth-child(1) > h2").should(
      "have.text",
      "Industrial manufacturing"
    );
    cy.get(".card:nth-child(2) > h2").should("have.text", "Mining & metals");
    cy.get(".card:nth-child(3) > h2").should("have.text", "Civil Aviation");
    cy.get(".card:nth-child(4) > h2").should(
      "have.text",
      "Industrial manufacturing"
    );
    cy.get(".card:nth-child(5) > h2").should("have.text", "Mining & metals");
    cy.get(".card:nth-child(6) > h2").should("have.text", "Civil Aviation");
    cy.get(".card:nth-child(7) > h2").should(
      "have.text",
      "Industrial manufacturing"
    );
    cy.get(".card:nth-child(8) > h2").should("have.text", "Mining & metals");
    cy.get(".card:nth-child(9) > h2").should("have.text", "Civil Aviation");
  });

  it("displays 9 cards with descriptions", () => {
    cy.get(".card").should("have.length", 9);
    cy.get(".card:nth-child(1) > p").should(
      "include.text",
      "Donec id elit non mi porta"
    );
    cy.get(".card:nth-child(2) > p").should(
      "include.text",
      "Donec id elit non mi porta"
    );
    cy.get(".card:nth-child(3) > p").should(
      "include.text",
      "Donec id elit non mi porta"
    );
    cy.get(".card:nth-child(4) > p").should(
      "include.text",
      "Donec id elit non mi porta"
    );
    cy.get(".card:nth-child(5) > p").should(
      "include.text",
      "Donec id elit non mi porta"
    );
    cy.get(".card:nth-child(6) > p").should(
      "include.text",
      "Donec id elit non mi porta"
    );
    cy.get(".card:nth-child(7) > p").should(
      "include.text",
      "Donec id elit non mi porta"
    );
    cy.get(".card:nth-child(8) > p").should(
      "include.text",
      "Donec id elit non mi porta"
    );
    cy.get(".card:nth-child(9) > p").should(
      "include.text",
      "Donec id elit non mi porta"
    );
  });

  it("displays 9 cards with links", () => {
    cy.get(".card").should("have.length", 9);
    cy.get(".card:nth-child(1) > p > a").should("have.attr", "href", "#");
    cy.get(".card:nth-child(2) > p > a").should("have.attr", "href", "#");
    cy.get(".card:nth-child(3) > p > a").should("have.attr", "href", "#");
    cy.get(".card:nth-child(4) > p > a").should("have.attr", "href", "#");
    cy.get(".card:nth-child(5) > p > a").should("have.attr", "href", "#");
    cy.get(".card:nth-child(6) > p > a").should("have.attr", "href", "#");
    cy.get(".card:nth-child(7) > p > a").should("have.attr", "href", "#");
    cy.get(".card:nth-child(8) > p > a").should("have.attr", "href", "#");
    cy.get(".card:nth-child(9) > p > a").should("have.attr", "href", "#");
  });

  it("displays 9 cards with data-industry attributes", () => {
    cy.get(".card").should("have.length", 9);
    cy.get(".card:nth-child(1)").should(
      "have.attr",
      "data-industry",
      "manufacturing"
    );
    cy.get(".card:nth-child(2)").should("have.attr", "data-industry", "mining");
    cy.get(".card:nth-child(3)").should(
      "have.attr",
      "data-industry",
      "aviation"
    );
    cy.get(".card:nth-child(4)").should(
      "have.attr",
      "data-industry",
      "manufacturing"
    );
    cy.get(".card:nth-child(5)").should("have.attr", "data-industry", "mining");
    cy.get(".card:nth-child(6)").should(
      "have.attr",
      "data-industry",
      "aviation"
    );
    cy.get(".card:nth-child(7)").should(
      "have.attr",
      "data-industry",
      "manufacturing"
    );
    cy.get(".card:nth-child(8)").should("have.attr", "data-industry", "mining");
    cy.get(".card:nth-child(9)").should(
      "have.attr",
      "data-industry",
      "aviation"
    );
  });

  it("filters cards by industry when minning is choosen", () => {
    cy.get(".industry").select("mining").should("have.value", "mining");
    cy.get(".card:nth-child(1)").should("have.class", "hidden");
    cy.get(".card:nth-child(2)").not("have.class", "hidden");
    cy.get(".card:nth-child(3)").should("have.class", "hidden");
    cy.get(".card:nth-child(4)").should("have.class", "hidden");
    cy.get(".card:nth-child(5)").not("have.class", "hidden");
  });

  it("filters cards by industry when manufacturing is choosen", () => {
    cy.get(".industry")
      .select("manufacturing")
      .should("have.value", "manufacturing");
    cy.get(".card:nth-child(1)").not("have.class", "hidden");
    cy.get(".card:nth-child(2)").should("have.class", "hidden");
    cy.get(".card:nth-child(3)").should("have.class", "hidden");
    cy.get(".card:nth-child(4)").not("have.class", "hidden");
    cy.get(".card:nth-child(5)").should("have.class", "hidden");
  });

  it("filters cards by industry when aviation is choosen", () => {
    cy.get(".industry").select("aviation").should("have.value", "aviation");
    cy.get(".card:nth-child(1)").should("have.class", "hidden");
    cy.get(".card:nth-child(2)").should("have.class", "hidden");
    cy.get(".card:nth-child(3)").not("have.class", "hidden");
    cy.get(".card:nth-child(4)").should("have.class", "hidden");
  });

  it("filters cards by industry when all is choosen", () => {
    cy.get(".industry").select("all").should("have.value", "all");
    cy.get(".card").should("not.have.class", "hidden");
  });
});
