const {Given, When, Then} = require('@cucumber/cucumber');

const SplitwiseTabBarActions = require('../pages/splitwiseTabBar.actions');
const splitwiseTabBarActions = new SplitwiseTabBarActions();

const SplitwiseActivityPage = require('../pages/splitwiseActivity.page');
const ActionHelper = require('../helpers/actionHelpers');
const splitwiseActivityPage = new SplitwiseActivityPage();



When('I navigate to activity screen', function() {
   splitwiseTabBarActions.clickOnFriendsTab();
   splitwiseTabBarActions.clickOnActivityTab();

});

Then('I should see my added expenses {string}', function(description) {
   splitwiseActivityPage.isMyAddedExpenseDisplayedInFirstPlace(description);
});







