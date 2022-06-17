beforeEach(() => {
  cy.visit("/");
});

describe("Lighthouse", () => {
  it("loads fast enough", () => {
    cy.lighthouse(
      {
        performance: 50,
        accessibility: 90,
        "best-practices": 80,
        seo: 80,
      },
      {
        formFactor: "desktop",
        screenEmulation: {
          mobile: false,
          disable: false,
          width: Cypress.config("viewportWidth"),
          height: Cypress.config("viewportHeight"),
          deviceScaleRatio: 1,
        },
      }
    );
  });

  it("shows the text report returned by from the plugins task", () => {
    const thresholds = {
      performance: 50,
      accessibility: 90,
      "best-practices": 80,
      seo: 80,
    };
    const opts = {
      formFactor: "desktop",
      screenEmulation: {
        mobile: false,
        disable: false,
        width: Cypress.config("viewportWidth"),
        height: Cypress.config("viewportHeight"),
        deviceScaleRatio: 1,
      },
    };
    cy.url()
      .then((url) => {
        cy.task("lighthouse", {
          url,
          thresholds,
          opts,
        });
      })
      .then((report) => {
        const { errors, results, txt } = report;
        // our custom code in the plugins file has summarized the report
        cy.log(report.txt);
      });
  });
});
