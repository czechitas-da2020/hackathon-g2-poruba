let homePage = {
    header: {
        get buttSignIn() { return browser.$('.user_login') },
        get buttMenu() {return browser.$('.nav_toggle')},
        get shoppingCart() {return browser.$('.shopping_cart')},
        get logo() {return browser.$('#header_logo')}

    },

    body: {
        get header() { return browser.$('.header-desc-primary') },
        get searchForm() { return browser.$('#xs_room_search_form') },
        get interiorSection() { return browser.$('#hotelInteriorBlock') },
        get amenitesSectin() { return browser.$('#hotelAmenitiesBlock') },
        get ourRooms() { return browser.$('#hotelRoomsBlock') },
        get whatOurGuest() { return browser.$('#hotelTestimonialBlock') },
        get footer() { return browser.$('.footer-container') },
    },

    open() {
        browser.url("http://czechitas-datestovani-hackathon.cz/en/")
      },
}


module.exports = homePage
