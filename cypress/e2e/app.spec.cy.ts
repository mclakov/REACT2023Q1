/// <reference types="cypress" />
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
describe('Test app functionality', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });
  it('navigation works', () => {
    cy.visit('/ttt');
    cy.get('h1').should('contain', 'Not Found Page');
  });
  it('navigation about works', () => {
    cy.visit('/about');
    cy.url().should('include', '/about');
  });
  it('navigation forms works', () => {
    cy.visit('/form');
    cy.url().should('include', '/form');
  });
});
