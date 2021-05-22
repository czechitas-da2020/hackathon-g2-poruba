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
            homePage.header.signInHover.click();
            browser.pause(500);
            homePage.header.logoutBtn.click();

        })

    })
    describe('US - HCKTHN 18 Logout', () => {
        before(() => {
            browser.url("http://czechitas-datestovani-hackathon.cz/en/login?back=my-account");
        })
        it('User logout', () => {
            loginPage.body.mailBox.setValue("porubacky@gmail.com"); //premade user email: porubacky@gmail.com; password: czechitas1
            loginPage.body.pswBox.setValue("czechitas1");
            loginPage.body.loginBtn.click();
            homePage.header.signInHover.click();
            browser.pause(500);
            homePage.header.logoutBtn.click();
            expect(homePage.header.buttSignIn).toHaveText("Sign in");
        })

    })
    describe('US - HCKTHN 17 My account page', () => {
        before(() => {
            browser.url("http://czechitas-datestovani-hackathon.cz/en/login?back=my-account");
            loginPage.body.mailBox.setValue("porubacky@gmail.com"); //premade user email: porubacky@gmail.com; password: czechitas1
            loginPage.body.pswBox.setValue("czechitas1");
            loginPage.body.loginBtn.click();
        })
        it('Order history and details on page', () => {
            expect(loginPage.body.orderHistory).toBeVisible();
        })
        it('My credit slips on page', () => {
            expect(loginPage.body.creditSlips).toBeVisible();
        })
        it('My addresses on page', () => {
            expect(loginPage.body.myAddresses).toBeVisible();
        })
        it('My personal information on page', () => {
            expect(loginPage.body.myAddresses).toBeVisible();
        })
        it('Home button on page', () => {
            expect(loginPage.body.homeBtn).toBeClickable();
        })
        after(() => {
            homePage.header.signInHover.click();
            browser.pause(500);
            homePage.header.logoutBtn.click();
        }

        )
    })
})