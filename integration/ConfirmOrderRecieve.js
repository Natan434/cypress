var Selectors = require('../support/NonCommercialSelectors.js');
var LoginDetails = require('../support/LoginDetails.js');
var url = 'https://itdev03.me.pl:21015/'


describe('Confirm order Recieve', () => {
    it(' ', () => {
        cy.intercept('POST', 'https://itdev03.me.pl:21015/api/order/receive').as('orderRecieved')
        
        cy.visit(url);
        cy.login(LoginDetails.NonCommercial.HUB.Username,LoginDetails.NonCommercial.HUB.Password)
        cy.get(Selectors.orderSite).click();
        cy.wait(2000);
        cy.get(Selectors.inDeliveryTab).click();
        cy.get('mat-expansion-panel').find('.mat-expansion-panel-header').click();
        cy.get(Selectors.orderInDeliveryCheck).click();
        cy.get(Selectors.pickFlag).click()
        // cy.get(input).type('1');
        cy.get(Selectors.qntyInput).type('1');
        cy.get(Selectors.pickUpButton).click();
        cy.wait('@orderRecieved').then((interception)=>{assert.isNotNull(interception.response.body,'Order has been recieved')})
    })	
})