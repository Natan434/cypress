var Selectors = require('../../support/NonCommercialSelectors.js');
var LoginDetails = require('../../support/LoginDetails.js');

var url = 'https://itdev03.me.pl:21015/'


describe('Process all orders', () => {
    it(' ', () => {
        cy.intercept('POST', 'https://itdev03.me.pl:21015/api/order/FastRealize').as('orderRealized')
        
        cy.visit(url);
        cy.login(LoginDetails.NonCommercial.Admin.Username,LoginDetails.NonCommercial.Admin.Password)
        cy.get(Selectors.orderSite).click();
        cy.wait(2000);
        cy.get(Selectors.toRealizationTab).click();
        cy.get(Selectors.checkAllBtn).click();
        cy.get(Selectors.fastProccesingAction).click();
        // cy.get(Selectors.deliveryTypeList).click();
       // cy.get(Selectors.outsourceDelivery).click();
        cy.get(Selectors.processingSubmittBtn).click();
        cy.wait('@orderRealized').then((interception)=>{assert.isNotNull(interception.response.body,'Order has been Realized')})
    })	
})