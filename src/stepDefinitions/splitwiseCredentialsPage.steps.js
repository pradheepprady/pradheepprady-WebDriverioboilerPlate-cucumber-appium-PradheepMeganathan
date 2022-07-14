const {Given, When, Then} = require('@cucumber/cucumber');

const SplitWiseCredentialsPage = require('../pages/splitwiseCredentials.page');
const splitWiseCredentialsPage = new SplitWiseCredentialsPage();

When('I enter {string} and {string}', function(emailAddress, passWord)  {
   splitWiseCredentialsPage.fillEmail(emailAddress);
   splitWiseCredentialsPage.fillPassword(passWord);
});

When('I click on login button with credentials', function() {
   splitWiseCredentialsPage.clickLoginButton();
});






