
const createAccount = require('../pages/create.account.page')
const homePage = require('../pages/home.page')
const loginPage = require('../pages/login.page')

describe('HCKTHN-20 Create account', () => {
    before(() => {
        homePage.open()
        homePage.header.buttSignIn.click()
    })

    after(() => {

    })

    it('is able register to application with correct email', () => {
        loginPage.body.mailCreate.setValue('porubacky+reg' + (Math.floor(Math.random() * 1000)) + '@gmail.com')
        loginPage.body.buttonCreate.click()
        createAccount.firstName.setValue('Jana')
        createAccount.lastName.setValue('Nováková')
        createAccount.password.setValue('Czechitas1')
        createAccount.buttonReg.click()
        expect(browser).toHaveUrl(homePage.url + 'en/my-account')
    })



})