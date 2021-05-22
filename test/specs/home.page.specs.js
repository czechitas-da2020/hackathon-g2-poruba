const homePage = require('../pages/home.page')


//We display a language switcher in footer section. With this switcher, we allow users change language selected. We allow users to switch between languages:

describe('US HCKTHN-28 Main sections of home page', () => {
    before(() => {
        homePage.open()
    })

    it('url structure is correct', () => {
        //default language is english - www.czechitas-hackhaton.cz/languageSelected
        expect(browser).toHaveUrl(homePage.url + "en/")
    })

    it('header is visible', () => {
        expect(homePage.body.header).toBeVisible()
    })

    it('search form is visible', () => {
        expect(homePage.body.searchForm).toBeVisible()
    })

    it('interior section is visible', () => {
        expect(homePage.body.interiorSection).toBeVisible()
    })

    it('amenities is visible', () => {
        expect(homePage.body.amenitesSectin).toBeVisible()
    })

    it('section our rooms is visible', () => {
        expect(homePage.body.ourRooms).toBeVisible()
    })

    it('what our guests say section is visible', () => {
        expect(homePage.body.whatOurGuest).toBeVisible()
    })

    it('footer is visible', () => {
        expect(homePage.body.footer).toBeVisible()
    })

    describe('US - HCKTHN-27 default language selection', () => {
        before(() => {
            homePage.open()
        })

        it('default language is english', () => {
            expect(homePage.body.languageChange).toHaveText("English")
        })

    })

    describe('US - HCKTHN-29 Language switcher', () => {

        it('is visible', () => {
            expect(homePage.body.languageChange).toBeVisible()
        })

        it('is able to change language', () => {
            homePage.body.languageChange.scrollIntoView()
            homePage.body.languageChange.click()
            homePage.body.czech.click()
            expect(browser).toHaveUrl(homePage.url + "cs/")
        })

    })

 
   


})
