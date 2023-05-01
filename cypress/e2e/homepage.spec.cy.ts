/// <reference types="cypress" />
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
describe('Test homepage', () => {
  it('load data on search submit', () => {
    cy.visit('/');
    cy.get('input[name="search"]').type(`cats`);
  });
});
