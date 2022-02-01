var Selectors = require('../support/NonCommercialSelectors.js');
var LoginDetails = require('../support/LoginDetails.js');
var Data = require('../support/NonCommercialTestData.js');
var url = 'https://itdev03.me.pl:21015/'


describe('Process all orders', () => {
    it(' ', () => {
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
        cy.wait('https://itdev03.me.pl:21015/api/order/FastRealize').should((xhr) => {
            expect(xhr.status, 'successful POST').to.equal(200)
           expect(xhr.url, 'post url').to.match(/\/posts$/)
         })
    })	
})