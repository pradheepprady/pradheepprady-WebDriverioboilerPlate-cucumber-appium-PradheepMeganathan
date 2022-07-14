const {Given, When, Then} = require('@cucumber/cucumber');

const SplitwiseTabBarActions = require('../pages/splitwiseTabBar.actions');
const splitwiseTabBarActions = new SplitwiseTabBarActions();

const SplitwiseAddExpenses = require('../pages/splitwiseAddExpenses.page');
const splitwiseAddExpenses = new SplitwiseAddExpenses();


When('I select {string} fo adding expenses', function(groupName) {
   splitwiseAddExpenses.selectGroup(groupName);

});

When('I add {string} euro expenses with description {string}', function(amount, description)  {
   splitwiseTabBarActions.clickOnAddExpensesButton();
   splitwiseAddExpenses.fillDescription(description);
   splitwiseAddExpenses.fillAmount(amount);
   splitwiseAddExpenses.clickSaveButton();
});






