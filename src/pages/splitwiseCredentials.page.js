const ActionHelper = require('../helpers/actionHelpers');
const chai = require('chai');
const expect = chai.expect;

class SplitWiseCredentialsPage {

    getObjectLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`./../screens/native/${platform}/splitWiseCredentials.screen.js`);
    }


    fillEmail(emailAddress) {
        ActionHelper.click(this.getObjectLocator().emailAddressTextField);
        ActionHelper.sendText(this.getObjectLocator().emailAddressTextField, emailAddress);
    }

    fillPassword(passWord) {
        ActionHelper.click(this.getObjectLocator().passWordTextField);
        ActionHelper.sendText(this.getObjectLocator().passWordTextField, passWord);
    }

    clickLoginButton() {
        ActionHelper.click(this.getObjectLocator().loginButton);
    }


}

module.exports = SplitWiseCredentialsPage;
