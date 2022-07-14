const {Given, When, Then} = require('@cucumber/cucumber');

const SplitWiseEnterDetailsPage = require('../pages/splitwiseEnterDetails.page');
const spltwiseEnterDetailsPage = new SplitWiseEnterDetailsPage();

When('I fill {string} {string} {string} {string} {string} and {string}', function(fullName, emailAddress, passWord, country, phoneNumber, currency)  {
    spltwiseEnterDetailsPage.fillUserName(fullName);
    spltwiseEnterDetailsPage.fillEmail(emailAddress);
    spltwiseEnterDetailsPage.fillPassword(passWord);
    spltwiseEnterDetailsPage.selectCountryFromTheList(country);
    spltwiseEnterDetailsPage.fillPhoneNumber(phoneNumber);
    spltwiseEnterDetailsPage.changeCurrency(currency);
});

When('I click on the done button', function() {
    spltwiseEnterDetailsPage.clickOnDoneButton();

});



