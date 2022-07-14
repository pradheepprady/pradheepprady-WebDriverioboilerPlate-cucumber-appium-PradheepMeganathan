class SplitwiseAddExpensesScreen {
    constructor() {
        this.searchTextField = 
            'id=com.Splitwise.SplitwiseMobile:id/personChooser';
        this.backButton =
            '//android.widget.ImageButton[@content-desc="Navigate up"]';
        this.descriptionTextField =
            'id=com.Splitwise.SplitwiseMobile:id/descriptionView';
        this.amountTextField =
            'id=com.Splitwise.SplitwiseMobile:id/amountView';
        this.saveButton =
            'id=com.Splitwise.SplitwiseMobile:id/doneAction';
        this.paidByButton =
            'id=com.Splitwise.SplitwiseMobile:id/payerButton';
        this.splitButton =
            'com.Splitwise.SplitwiseMobile:id/splitButton';
    }
}

module.exports = new SplitwiseAddExpensesScreen();
