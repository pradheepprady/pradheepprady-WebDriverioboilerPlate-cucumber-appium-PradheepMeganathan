const {Given, When, Then} = require('@cucumber/cucumber');

const SplitWiseHomePage = require('../pages/splitwiseHome.page');
const splitwiseHomePage = new SplitWiseHomePage();

Given('I launch the app', function() {
    splitwiseHomePage.launchApp();
});

When('I click singup button', function()  {
    splitwiseHomePage.clickSignupButton();
});

When('I click login button', function()  {
    splitwiseHomePage.clickLoginButton();
});


