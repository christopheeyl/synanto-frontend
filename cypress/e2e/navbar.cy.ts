describe('Navigation', () => {
  it('should navigate to the contacts page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "contact" and click it
    cy.get('a[href*="contacts"]').click()

    // The new url should include "/contact"
    cy.url().should('include', '/contacts')
  });
})