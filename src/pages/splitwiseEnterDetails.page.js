const ActionHelper = require('./../helpers/actionHelpers');
const chai = require('chai');
const expect = chai.expect;

class SplitWiseEnterDetailsPage {

    getObjectLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`./../screens/native/${platform}/splitwiseEnterDetails.screen.js`);
    }

    fillUserName(fullName) {
        ActionHelper.sendText(this.getObjectLocator().fullNameTextField, fullName);
    }

    fillEmail(emailAddress) {
        ActionHelper.click(this.getObjectLocator().emailAddressTextField);
        ActionHelper.sendText(this.getObjectLocator().emailAddressTextField, emailAddress);
    }

    fillPassword(passWord) {
        ActionHelper.click(this.getObjectLocator().passWordTextField);
        ActionHelper.sendText(this.getObjectLocator().passWordTextField, passWord);
    }

    selectCountryFromTheList(country) {
        ActionHelper.click(this.getObjectLocator().countrySelectionPicker);
        ActionHelper.scrollToTextViewAndClick(country);
    }

    fillPhoneNumber(phoneNumber) {
        ActionHelper.click(this.getObjectLocator().phoneNumberTextField);
        ActionHelper.sendText(this.getObjectLocator().phoneNumberTextField, phoneNumber);
    }

    changeCurrency(currency) {
        ActionHelper.click(this.getObjectLocator().changeCurrencyButton);
        ActionHelper.click(this.getObjectLocator().searchCurrencyTextField);
        ActionHelper.sendText(this.getObjectLocator().searchCurrencyTextField, currency);
        ActionHelper.clickByTextInView(currency)
    }

    clickOnDoneButton() {
        ActionHelper.click(this.getObjectLocator().doneButton);
    }


}

module.exports = SplitWiseEnterDetailsPage;
