const ActionHelper = require('../helpers/actionHelpers');
const chai = require('chai');
const expect = chai.expect;

class SplitwiseTabBarActions {

    getObjectLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`./../screens/native/${platform}/splitWiseTabBar.js`);
    }

    isGroupTabVisible() {
        return ActionHelper.isVisible(this.getObjectLocator().groupTabBar);
    }

    clickOnGroupTab() {
        ActionHelper.click(this.getObjectLocator().groupTabBar);
    }

    clickOnFriendsTab() {
        ActionHelper.click(this.getObjectLocator().friendsTabBar);
    }

    clickOnActivityTab() {
        ActionHelper.click(this.getObjectLocator().activityTabBar);
    }

    clickOnAccountTab() {
        ActionHelper.click(this.getObjectLocator().accountTabBar);
    }

    clickOnAddExpensesButton() {
        ActionHelper.click(this.getObjectLocator().addExpenseButton);
    }


}

module.exports = SplitwiseTabBarActions;
