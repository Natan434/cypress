var Selectors = require('../support/NonCommercialSelectors.js');
var LoginDetails = require('../support/LoginDetails.js');
var Data = require('../support/NonCommercialTestData.js');
var url = 'https://zamowienianiehandlowe.me.pl/'


describe('Add new record', () => {
    it(' ', () => {
        cy.visit(url);
        cy.login(LoginDetails.NonCommercial.Username,LoginDetails.NonCommercial.Password)
        cy.get(Selectors.selectionList).click().get(Selectors.selectionListOption)
        .contains('MATERIAŁY BIUROWE I EKSPLOATACYJNE')
        .click();
        cy.get(Selectors.selectionProductList).click().get()
    })	
})