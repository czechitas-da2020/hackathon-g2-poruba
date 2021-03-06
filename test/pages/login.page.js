let loginPage = {

    body: {
        get accountForm() { return browser.$('#create-account_form .page-subheading') },
        get loginForm() { return browser.$('#login_form') },
        get lostPassword() { return browser.$('.lost_password a') },
        get mailBox() { return browser.$('#email') },
        get pswBox() { return browser.$('#passwd') },
        get loginBtn() { return browser.$('#SubmitLogin') },
        get buttonCreate() { return browser.$('#SubmitCreate') },
        get mailCreate() { return browser.$('#email_create') },
        get orderHistory() { return browser.$('[title = "Orders"]') },
        get creditSlips() { return browser.$('[title = "Credit slips"]') },
        get myAddresses() { return browser.$('[title = "Addresses"]') },
        get homeBtn() { return browser.$('[title = "Home"]') },
    },


}


module.exports = loginPage