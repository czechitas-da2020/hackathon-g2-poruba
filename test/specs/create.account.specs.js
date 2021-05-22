
const createAccount = require('../pages/create.account.page')
const homePage = require('../pages/home.page')
const loginPage = require('../pages/login.page')

describe('HCKTHN-20 Create account', () => {
    before(() => {
        homePage.open()
        homePage.header.buttSignIn.click()
    })


    it('is able register to application with correct email', () => {
        loginPage.body.mailCreate.setValue('porubacky+reg' + (Math.floor(Math.random() * 1000)) + '@gmail.com')
        loginPage.body.buttonCreate.click()
        createAccount.firstName.setValue('Jana')
        createAccount.lastName.setValue('Nováková')
        createAccount.password.setValue('Czechitas1')
        createAccount.buttonReg.click()
        expect(browser).toHaveUrl(homePage.url + 'en/my-account')
        homePage.header.signInHover.click()
        homePage.header.logoutBtn.click()

    })

    it('is not able register to application with incorrect email', () => {   
        loginPage.body.mailCreate.setValue('@gmail.com')
        loginPage.body.buttonCreate.click()
        expect(browser).toHaveUrl(homePage.url + ("en/login?back=my-account"))
    })

    it('is not able registration to appliaction with existing email', () => {   
        loginPage.body.mailCreate.setValue('porubacky@gmail.com')
        loginPage.body.buttonCreate.click()
        expect(browser.$('#create_account_error')).toHaveText('An account using this email address has already been registered. Please enter a valid password or request a new one.')
    })

    it('is not able register to application when all required fields are not filled ', () => {   
        loginPage.body.mailCreate.setValue('porubacky+reg' + (Math.floor(Math.random()*1000)) + '@gmail.com')
        loginPage.body.buttonCreate.click()
        loginPage.body.buttonCreate.click()
        createAccount.lastName.setValue('Nováková')
        createAccount.password.setValue('Czechitas1')
        createAccount.buttonReg.click()
        expect(browser.$('.alert.alert-danger')).toBeVisible()
    })




})
