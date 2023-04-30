// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
describe('Test app functionality', () => {
  it('navigation works', () => {
    cy.visit('/');

    cy.get('a[href="/about"]').click();
    cy.url().should('include', '/about');

    cy.get('a[href="/forms"]').click();
    cy.url().should('include', '/forms');

    cy.visit('/ttt');
    cy.get('h1').should('contain', 'Not Found Page');
  });
});
