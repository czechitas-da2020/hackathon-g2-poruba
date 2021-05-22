let loginPage = {

    body: {
        get accountForm() { return browser.$('#create-account_form .page-subheading') },
        get loginForm() { return browser.$('#login_form') },
        get lostPassword() { return browser.$('.lost_password a') },
        get mailBox() { return browser.$('#email') },
        get pswBox() { return browser.$('#passwd') },
        get loginBtn() { return browser.$('#SubmitLogin') },
    },


}


module.exports = loginPage