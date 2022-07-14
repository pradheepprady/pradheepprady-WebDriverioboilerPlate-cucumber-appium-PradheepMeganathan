const ActionHelper = require('../helpers/actionHelpers');
const chai = require('chai');
const expect = chai.expect;

class SplitAddExpensesPage {

    getObjectLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`./../screens/native/${platform}/splitwiseAddExpenses.screen.js`);
    }

    selectGroup(groupName) {
        // ActionHelper.click(this.getObjectLocator().searchTextField);
        ActionHelper.scrollToTextViewAndClick(groupName);
    }

    fillDescription(description) {
        ActionHelper.click(this.getObjectLocator().descriptionTextField);
        ActionHelper.sendText(this.getObjectLocator().descriptionTextField, description);
    }

    fillAmount(amount) {
        ActionHelper.click(this.getObjectLocator().amountTextField);
        ActionHelper.sendText(this.getObjectLocator().amountTextField, amount);
    }

    clickBackButton() {
        ActionHelper.click(this.getObjectLocator().backButton);
    }

    clickSaveButton() {
        ActionHelper.click(this.getObjectLocator().saveButton);
    }


}

module.exports = SplitAddExpensesPage;
