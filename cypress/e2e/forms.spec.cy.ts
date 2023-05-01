/// <reference types="cypress" />
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
describe('Test forms pages', () => {
  beforeEach(() => {
    cy.visit('/form');
  });

  it('should field name input', () => {
    const testName = 'Name';
    cy.get('[id=firstnameInput]').clear().type(testName);
    cy.get('[id=firstnameInput]').should('have.value', testName);
  });

  it('should field Lastname input', () => {
    const testLastname = 'Lastname';
    cy.get('[id=lastnameInput]').clear().type(testLastname);
    cy.get('[id=lastnameInput]').should('have.value', testLastname);
  });

  it('should field data input', () => {
    const data = '2010-01-01';
    cy.get('[id=dateInput]').clear().type(data);
    cy.get('[id=dateInput]').should('have.value', data);
  });

  it('should show error date massage', () => {
    cy.contains('Submit').click();
    cy.get('span').should('contain', '* birth date should be fill');
  });

  it('should show error name massage', () => {
    cy.contains('Submit').click();
    cy.get('span').should('contain', '* first name should be fill');
  });

  it('should show error lastname massage', () => {
    cy.contains('Submit').click();
    cy.get('span').should('contain', '* last name should be fill');
  });

  it('should add users card', () => {
    const testName = 'Name';
    cy.get('[id=firstnameInput]').clear().type(testName);
    const testLastname = 'Lastname';
    cy.get('[id=lastnameInput]').clear().type(testLastname);
    const data = '2010-01-01';
    cy.get('input[type="date"]').clear().type(data);
    cy.contains('Submit').click();
    cy.get('[id=user-card]').should('exist');
  });

  it('should add users img', () => {
    const testName = 'Name';
    cy.get('[id=firstnameInput]').clear().type(testName);
    const testLastname = 'Lastname';
    cy.get('[id=lastnameInput]').clear().type(testLastname);
    const data = '2010-01-01';
    cy.get('input[type="date"]').clear().type(data);
    cy.contains('Submit').click();
    cy.get('[id=user-img]').should('exist');
  });

  it('should clear inputs', () => {
    const testName = 'Name';
    cy.get('[id=firstnameInput]').clear().type(testName);
    const testLastname = 'Lastname';
    cy.get('[id=lastnameInput]').clear().type(testLastname);
    const data = '2010-01-01';
    cy.get('input[type="date"]').clear().type(data);
    cy.contains('Submit').click();
    cy.get('[id=firstnameInput]').should('have.value', '');
    cy.get('[id=lastnameInput]').should('have.value', '');
  });
});
