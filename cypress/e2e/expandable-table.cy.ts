describe("Expandable Table E2E Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the table with correct structure", () => {
    // Verify the table wrapper exists using data-cy
    cy.get("[data-cy=expandable-table]").should("be.visible");

    // Verify the dataCrunch logo is present in the header
    cy.get("[data-cy=logo]").should("be.visible");

    // Verify table header exists
    cy.get("[data-cy=table-header]").should("be.visible");

    // Verify we have the expected number of data rows
    cy.get("[data-cy^=table-row-]").should("have.length", 2);
  });

  it("should expand and collapse rows correctly", () => {
    // Test first row expansion using data-cy
    cy.get("[data-cy=expand-button-0]").click();

    // Verify the row expanded
    cy.get("[data-cy=expanded-content-0]").should("be.visible");
    cy.get("[data-cy=expanded-content-0]").should(
      "contain.text",
      "Expanded content for row 1"
    );

    // Verify the expand button shows correct state
    cy.get("[data-cy=expand-button-0]").should(
      "have.attr",
      "aria-expanded",
      "true"
    );

    // Test collapsing the row
    cy.get("[data-cy=expand-button-0]").click();

    // Verify the row collapsed
    cy.get("[data-cy=expanded-content-0]").should("not.exist");
    cy.get("[data-cy=expand-button-0]").should(
      "have.attr",
      "aria-expanded",
      "false"
    );
  });

  it("should handle multiple row expansions", () => {
    // Expand first row
    cy.get("[data-cy=expand-button-0]").click();

    // Expand second row
    cy.get("[data-cy=expand-button-1]").click();

    // Verify both rows are expanded
    cy.get("[data-cy=expanded-content-0]").should("be.visible");
    cy.get("[data-cy=expanded-content-1]").should("be.visible");
    cy.get("[data-cy=expanded-content-0]").should(
      "contain.text",
      "Expanded content for row 1"
    );
    cy.get("[data-cy=expanded-content-1]").should(
      "contain.text",
      "Expanded content for row 2"
    );

    // Verify both expand buttons show expanded state
    cy.get("[data-cy=expand-button-0]").should(
      "have.attr",
      "aria-expanded",
      "true"
    );
    cy.get("[data-cy=expand-button-1]").should(
      "have.attr",
      "aria-expanded",
      "true"
    );
  });

  it("should be keyboard accessible", () => {
    // Test keyboard navigation and activation
    cy.get("[data-cy=table-row-0]").focus(); // Focus first data row

    // Test Enter key to expand
    cy.get("[data-cy=table-row-0]").type("{enter}");
    cy.get("[data-cy=expanded-content-0]").should("exist");

    // Test Space key to collapse
    cy.get("[data-cy=table-row-0]").type(" ");
    cy.get("[data-cy=expanded-content-0]").should("not.exist");
  });

  it("should maintain proper ARIA attributes", () => {
    // Check table ARIA attributes
    cy.get("[data-cy=expandable-table]").should(
      "have.attr",
      "aria-label",
      "Expandable data table"
    );
    cy.get("[data-cy=expandable-table]").should("have.attr", "aria-rowcount");
    cy.get("[data-cy=expandable-table]").should("have.attr", "aria-colcount");

    // Check row ARIA attributes
    cy.get("[data-cy^=table-row-]").each(($row, index) => {
      cy.wrap($row).should("have.attr", "aria-rowindex", String(index + 2)); // +2 because header is index 1
    });

    // Test dynamic ARIA updates when expanding
    cy.get("[data-cy=expand-button-0]").click();
    cy.get("[data-cy=table-row-0]").should(
      "have.attr",
      "aria-expanded",
      "true"
    );
    cy.get("[data-cy=table-row-0]").should("have.attr", "aria-describedby");
  });

  it("should have responsive behavior", () => {
    // Test desktop view
    cy.viewport(1280, 720);
    cy.get("[data-cy=expandable-table]").should("be.visible");

    // Test tablet view
    cy.viewport(768, 1024);
    cy.get("[data-cy=expandable-table]").should("be.visible");

    // Test mobile view
    cy.viewport(375, 667);
    cy.get("[data-cy=expandable-table]").should("be.visible");

    // Verify functionality still works on mobile
    cy.get("[data-cy=expand-button-0]").click();
    cy.get("[data-cy=expanded-content-0]").should("be.visible");
  });
});
