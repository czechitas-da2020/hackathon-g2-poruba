const homePage = require('../pages/home.page')
const loginPage = require('../pages/login.page')

describe('Accounts - login, logout - english version', () => {
    describe('US - HCKTHN 21 Authentication page', () => {
        before(() => {
            browser.url("http://czechitas-datestovani-hackathon.cz/en/");
            homePage.header.buttSignIn.click()
        })
        it('Create an account form visible', () => {
            expect(loginPage.body.accountForm).toBeDisplayed();
        })
        it('Login form visible', () => {
            expect(loginPage.body.loginForm).toBeDisplayed();
        })
        it('Create an account form visible', () => {
            expect(loginPage.body.lostPassword).toBeDisplayed();
        })
    })
    describe('US - HCKTHN 19 Login', () => {
        before(() => {
            browser.url("http://czechitas-datestovani-hackathon.cz/en/");
            homePage.header.buttSignIn.click()
        })
        it('User login', () => {
            loginPage.body.mailBox.setValue("porubacky@gmail.com"); //premade user email: porubacky@gmail.com; password: czechitas1
            loginPage.body.pswBox.setValue("czechitas1");
            loginPage.body.loginBtn.click();
            expect(browser).toHaveUrl("http://czechitas-datestovani-hackathon.cz/en/my-account");
        })
        after(() => {
            $("#user_info_acc").click();
            $("a=Logout").click();
        })
    })
    describe('US - HCKTHN 18 Logout', () => {
        before(() => {
            browser.url("http://czechitas-datestovani-hackathon.cz/");
            homePage.header.buttSignIn.click();
        })
        it('User logout', () => {
            loginPage.body.mailBox.setValue("porubacky@gmail.com"); //premade user email: porubacky@gmail.com; password: czechitas1
            loginPage.body.pswBox.setValue("czechitas1");
            loginPage.body.loginBtn.click();
            $("#user_info_acc").click();
            $("a=Logout").click();
            expect(homePage.header.buttSignIn).toHaveText("Sign in");
        })

    })
})