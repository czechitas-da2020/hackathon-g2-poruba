
let createAccount = {
    get firstName() {return browser.$('#customer_firstname')},
    get lastName() {return browser.$('#customer_lastname')},
    get password() {return browser.$('#passwd')},
    get buttonReg() {return browser.$('#submitAccount')}
    
}


module.exports = createAccount