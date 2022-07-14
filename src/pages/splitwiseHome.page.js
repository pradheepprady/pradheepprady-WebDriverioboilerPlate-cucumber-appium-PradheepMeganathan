const ActionHelper = require('./../helpers/actionHelpers');
const chai = require('chai');
const expect = chai.expect;

class SplitWiseHomePage {

    getObjectLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`./../screens/native/${platform}/splitwiseHome.screen.js`);
    }

    launchApp() {
        ActionHelper.launchApp();
        // ActionHelper.switchToNativeContext();
        ActionHelper.pause(1);
    }

    clickSignupButton() {
        ActionHelper.click(this.getObjectLocator().signUpButton);
    }

    clickLoginButton() {
        ActionHelper.click(this.getObjectLocator().loginButton);
    }

    clickSignupWithGoogleButton() {
        ActionHelper.click(this.getObjectLocator().signUpWithGoogleButton);
    }

    clickTermsAndConditions() {
        ActionHelper.click(this.getObjectLocator().termsAndConditions);
    }
}

module.exports = SplitWiseHomePage;
