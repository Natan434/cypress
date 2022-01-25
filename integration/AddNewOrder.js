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
        .click()
        cy.get(Selectors.productTitle)
        cy.get(Selectors.addButton)
        .click();
        cy.get(Selectors.cartButton)
        .click()
        cy.get(Selectors.choseEvt)
        .click()
        cy.get(Selectors.confirmBtn)
        .click()
        cy.get(Selectors.commentInput).click().type("Zamówienie testowe")
        cy.get(Selectors.summaryBtn).click() 
        

    })	
})