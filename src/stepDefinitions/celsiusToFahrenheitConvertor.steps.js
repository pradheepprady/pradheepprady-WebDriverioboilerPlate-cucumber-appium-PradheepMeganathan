const {Given, When, Then} = require('@cucumber/cucumber');

const CelsiusToFahrenheitConvertorPage = require('./../pages/celsiusToFahrenheitConvertor.page');

const celsiusToFahrenheitConvertorPage = new CelsiusToFahrenheitConvertorPage();

Given('I launch the app', function() {
    celsiusToFahrenheitConvertorPage.launchApp();
});

When('I enter celsius of {string}', function(celsius)  {
    celsiusToFahrenheitConvertorPage.enterCelsius(celsius);
});

Then('I should see fahrenheit of {string}', function(fahrenheit) {
    celsiusToFahrenheitConvertorPage.verifyFahrenheitValue(fahrenheit);
});
