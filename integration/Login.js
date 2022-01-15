

const url = 'https://itdev01.me.pl:21020/'
let LoginData = require('../support/LoginDetails.js');
let Selectors = require('../support/LoginSelectors.js');
// import { Username, Password } from '../../../CypressAutomation/Pages/PageJSON/LoginDetails.json';
// import { Login, Password as _password, SubmitButton} from '../../../CypressAutomation/Pages/PageJSON/LoginSelectors.json';
console.log(Selectors.Login);
const getIframeDocument = () => {
  return cy
  .get('iframe')
  .its('0.contentDocument').should('exist')
}
const getIframeBody = () => {
  return getIframeDocument()
  .its('body').should('not.be.undefined')
  .then(cy.wrap)
}
describe('log in', (url) => {
    it('login', () => {
		cy.visit(url);
    getIframeBody().find(Selectors.LoginForm).type(LoginData.Username);
    getIframeBody().find(Selectors.PasswordForm).type(LoginData.Password);
    getIframeBody().find(Selectors.SubmitButton).click();
    })	
}) 