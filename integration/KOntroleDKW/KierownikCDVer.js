var LoginDetails = require('../../support/LoginDetails.js');
var url = 'https://itdev03.me.pl:21014/VirtualUser'


describe( "Check if inspections are browsing" ,()=>{
    it('',()=>{
        cy.intercept("POST","https://itdev03.me.pl:21014/Inspection/BrowseInsepctions").as("BrowseInspections")
        cy.visit(url);

        //Osobna metoda do VirtualUsera
        cy.VirtualUser("KierownikCD_CDŁ1")
        cy.login(LoginDetails.DKW.SuperAdmin.Username,LoginDetails.DKW.SuperAdmin.Password);
        cy.get(".nav-label").contains("Kontrole").click();
        cy.get(".nav-second-level li a").click();

        //Znaleźć sposób na wybór daty z datepickera
         cy.get("#DateFrom").clear().type('2019-01-01')
         cy.get("#filterBtn").click();
         
         cy.get("#InspectionsDataTable").find();
         cy.wait('@BrowseInspections').then((interception)=>{assert.isNotNull(interception.response.body, 'Inspections are loaded')})
        





    })
})