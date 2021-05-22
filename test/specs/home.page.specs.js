const homePage = require('../pages/home.page')


describe('Main sections of home page', () => {
    before(() => {
        homePage.open()
    })

    it('url structure is correct', () => {
        //default language is english
        expect(browser).toHaveUrl("http://czechitas-datestovani-hackathon.cz/en/")
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

})
