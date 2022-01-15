var Selectors = require('../support/AppSelectors.js');
var LoginDetails = require('../support/LoginDetails.js');
var url = 'https://itdev01.me.pl:21020/'


describe('Add new record', () => {
    it(' ', () => {
        cy.visit(url);
        cy.login(LoginDetails.Kosztowe.Username,LoginDetails.Kosztowe.Password)
        
    })	
})