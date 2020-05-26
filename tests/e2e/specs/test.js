// https://docs.cypress.io/api/introduction/api.html

describe("Test Gallery App", () => {
  context("Check signin", function() {
    beforeEach(function() {
      cy.visit("/");
    });
    it("Visits the app root url", () => {
      cy.contains("span", "Sign In");
    });

    it("Is redirected on visit to /gallery when no session", function() {
      cy.visit("/gallery");
      cy.url().should("include", "/");
    });

    it("Validate login", function() {
      cy.get("#input-8").type("jane.lae");
      cy.get(".v-messages__message");
    });

    it("Validate password", function() {
      cy.get("#input-11").type("11");
      cy.get(".v-messages__message");
    });

    it("Check correction value", function() {
      cy.get("#input-8").type("a.yerko@g.ua");
      cy.get("#input-11").type("123");
      cy.get(".v-btn").should("not.be.disabled");
    });

    it("Go next page after signin", function() {
      cy.get("#input-8").type("a.yerko@g.ua");
      cy.get("#input-11").type("123");
      cy.get(".v-btn").click();
      cy.url().should("include", "/greetings");
    });
  });

  context("Check greetings", function() {
    beforeEach(function() {
      cy.visit("/");
      cy.get("#input-8").type("a.yerko@g.ua");
      cy.get("#input-11").type("123");
      cy.get(".v-btn").click();
      cy.url().should("include", "/greetings");
    });

    it("Greetings test", function() {
      cy.contains("a", "press");
    });

    it("Go next page after greetings", function() {
      cy.get("a").click();
      cy.url().should("include", "/gallery");
    });
  });

  context("Check gallery", function() {
    beforeEach(function() {
      cy.visit("/");
      cy.get("#input-8").type("a.yerko@g.ua");
      cy.get("#input-11").type("123");
      cy.get(".v-btn").click();
      cy.get("a").click();
      cy.url().should("include", "/gallery");
    });

    it("Gallery contains", function() {
      cy.get(".galleryContent");
    });

    it("Check full screen", function() {
      cy.get(".galleryContent > :nth-child(1)").click();
      cy.get(".fullScreen-content");
    });

    it("Check full screen close", function() {
      cy.get(".galleryContent > :nth-child(1)").click();
      cy.get(".close").click();
      cy.get(".fullScreen-content").should("not.be");
    });

    it("Check full screen click left", function() {
      cy.get(".galleryContent > :nth-child(1)").click();
      cy.get(".left").click();
      cy.get(".fullScreen-content > div > img")
        .should("have.attr", "src")
        .should("not.be.include", "1_480x480");
    });

    it("Check full screen click right", function() {
      cy.get(".galleryContent > :nth-child(1)").click();
      cy.get(".right").click();
      cy.get(".fullScreen-content > div > img")
        .should("have.attr", "src")
        .should("not.be.include", "1_480x480");
    });
  });
});
