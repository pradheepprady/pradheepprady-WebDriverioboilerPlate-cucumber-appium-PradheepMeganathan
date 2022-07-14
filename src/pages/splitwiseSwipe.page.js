const ActionHelper = require('../helpers/actionHelpers');
const chai = require('chai');
const expect = chai.expect;

class SplitWiseSwipePage {

    getObjectLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`./../screens/native/${platform}/splitWiseSwipe.screen.js`);
    }

    getObjectLocatorForTabBar() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`./../screens/native/${platform}/splitWiseTabBar.js`);
    }

    clickOnWelcomeSlider() {
        ActionHelper.click(this.getObjectLocator().welcomeSliderText);
    }

    swipeTillWelcomeTextVisible() {
        while(!ActionHelper.isVisible(this.getObjectLocator().welcomeScreenText)) {
        ActionHelper.swipeRightToLeft(1);
        }
    }

    swipeTillTabBarVisible() {
        ActionHelper.swipeRightToLeft(3);
        ActionHelper.click(this.getObjectLocatorForTabBar().groupTabBar);
    }

    isWelcomeTextDisplayed(welcomeMessage) {
        expect(ActionHelper.getText(this.getObjectLocator().welcomeScreenText)).to.include(welcomeMessage);
    }


}

module.exports = SplitWiseSwipePage;
