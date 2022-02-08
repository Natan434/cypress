// var Selectors = require('../support/DKWSelectors.js');
var LoginDetails = require('../support/LoginDetails.js');
var url = 'https://itdev03.me.pl:21014/'





describe( "Test" ,()=>{
    it('',()=>{
        cy.visit(url);
        cy.login(LoginDetails.DKW.KierownikHUB.Username,LoginDetails.DKW.KierownikHUB.Password);
        cy.get(".nav > li > a").click();
        cy.get(".nav-second-level li a").click();





    })
})