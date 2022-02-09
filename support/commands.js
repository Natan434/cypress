// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import { LoginForm, PasswordForm, SubmitButton } from '../support/LoginSelectors.js';
Cypress.Commands.add('login', (username, password) =>{   
    const getIframeDocument = () => {
        return cy
        .get('iframe')
        .its('0.contentDocument').should('exist')
      }
      const getIframeBody = () => {
        return getIframeDocument()
        .its('body').should('not.be.undefined')
        .then(cy.wrap)
      }
getIframeBody().find(LoginForm).type(username);
getIframeBody().find(PasswordForm).type(password);
getIframeBody().find(SubmitButton).click();
})

Cypress.Commands.add('VirtualUser', role=>{
  cy.get(".dropdown > .btn").click();
  cy.get("#bs-select-1").contains(role).click();
  cy.get("#roleButton").click();

})