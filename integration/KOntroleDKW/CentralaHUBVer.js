// var Selectors = require('../support/DKWSelectors.js');
var LoginDetails = require('../../support/LoginDetails.js');
// ("C:\Users\ntrz00\CypressAutomation\cypress\support")
var url = 'https://itdev03.me.pl:21014/'


describe( "Test" ,()=>{
    it('',()=>{
        cy.intercept("POST","https://itdev03.me.pl:21014/Inspection/BrowseInsepctions").as("BrowseInspections")
        cy.visit(url);
        cy.login(LoginDetails.DKW.KierownikHUB.Username,LoginDetails.DKW.KierownikHUB.Password);
        cy.get(".nav-label").contains("Kontrole").click();
        cy.get(".nav-second-level li a").click();
        // cy.get("#DateFrom").type('2019-01-01');
        // cy.get("#filterBtn").click();
        cy.wait('@BrowseInspections').then((interception)=>{assert.isNotNull(interception.response.body, 'Inspections are loaded')})





    })
})