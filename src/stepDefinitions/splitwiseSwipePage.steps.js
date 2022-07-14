const {Given, When, Then} = require('@cucumber/cucumber');

const SplitWiseSwipePage = require('../pages/splitwiseSwipe.page');
const splitWiseSwipePage = new SplitWiseSwipePage();

When('I swipe through the welcome pages', function() {
    splitWiseSwipePage.clickOnWelcomeSlider()
    splitWiseSwipePage.swipeTillWelcomeTextVisible();
});

When('I swipe through the welcome page sliders', function() {
    splitWiseSwipePage.clickOnWelcomeSlider()
    splitWiseSwipePage.swipeTillTabBarVisible();
});

Then('I should see the {string} messages', function(welcomeMessage) {
    splitWiseSwipePage.isWelcomeTextDisplayed(welcomeMessage)
});


