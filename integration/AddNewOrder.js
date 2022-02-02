var Selectors = require('../support/NonCommercialSelectors.js');
var LoginDetails = require('../support/LoginDetails.js');
var url = 'https://itdev03.me.pl:21015/'



describe('Add new order', () => {
    it(' ', () => {
        cy.intercept('POST', 'https://itdev03.me.pl:21015/api/cart/AddItem').as('addProduct')
        cy.intercept('GET', 'https://itdev03.me.pl:21015/api/cart/GetCart').as('cartData')
        cy.intercept('POST', 'https://itdev03.me.pl:21015/api/order/create').as('orderCreate')
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
        cy.wait('@addProduct').then((interception)=>{assert.isNotNull(interception.response.body,'Product is Added')})
        cy.get(Selectors.cartButton)
        .click()
        cy.wait('@cartData').then((interception)=>{assert.isNotNull(interception.response.body,'Cart data is not null')})
        cy.get(Selectors.choseEvt)
        .click()
        cy.get(Selectors.confirmBtn)
        .click()
        cy.get(Selectors.commentInput).click().type("Zamówienie testowe")
        cy.get(Selectors.summaryBtn).click()
        cy.wait('@orderCreate').then((interception)=>{assert.isNotNull(interception.response.body,'Order has been created')})


    })	
})