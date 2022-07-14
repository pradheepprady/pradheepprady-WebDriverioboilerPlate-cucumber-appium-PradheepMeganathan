const ActionHelper = require('../helpers/actionHelpers');
const chai = require('chai');
const expect = chai.expect;

class SplitwiseActivityPage {

    getObjectLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`./../screens/native/${platform}/splitwiseActivity.screen.js`);
    }

    isMyAddedExpenseDisplayedInFirstPlace(description) {
        ActionHelper.pause(1)
        expect(ActionHelper.getText(this.getObjectLocator().firstTextView)).to.include(description);
    }


}

module.exports = SplitwiseActivityPage;
