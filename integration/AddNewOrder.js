var Selectors = require('../support/NonCommercialSelectors.js');
var LoginDetails = require('../support/LoginDetails.js');
var Data = require('../support/NonCommercialTestData.js');
var url = 'https://itdev03.me.pl:21015/'


describe('Add new order', () => {
    it(' ', () => {
        cy.visit(url);
        cy.login(LoginDetails.NonCommercial.HUB.Username,LoginDetails.NonCommercial.HUB.Password)
        cy.get(Selectors.selectionList)
        .click()
        .get(Selectors.selectionListOption)
        .contains('Kategoria testowa HUB')
        .click();
        cy.get(Selectors.selectionProductList)
        .click()
        .get(Selectors.productTitle)
        .contains('Produkt Testowy tylko CD')
        .click()
        .get(Selectors.addButton)
        .click()
    })	
})