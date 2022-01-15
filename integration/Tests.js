describe('Test1', function(){
it('Test1_1',()=>{
cy.visit("https://itdev01:21020/")
cy.get("input[id=login-page]").type("ntrz00")
cy.get("#password-inp").type("Xsw23edc")
cy.get("#submit-inp").submit
})
it('Test1_2',()=>{

})

})