class SplitwiseEnterDetailsScreen {
    constructor() {
        this.fullNameTextField =
            'id=com.Splitwise.SplitwiseMobile:id/nameField';
        this.emailAddressTextField =
            'id=com.Splitwise.SplitwiseMobile:id/emailField2';
        this.passWordTextField =
            'id=com.Splitwise.SplitwiseMobile:id/passwordFieldSignup';
        this.changeYourAvatar =
            '//android.widget.ImageView[@content-desc="Change your avatar"]';
        this.phoneNumberTextField = 
            'id=com.Splitwise.SplitwiseMobile:id/phoneField';
        this.countrySelectionPicker = 
            'id=com.Splitwise.SplitwiseMobile:id/countryPickerButton';
        this.changeCurrencyButton = 
            'id=com.Splitwise.SplitwiseMobile:id/currencyButton';
        this.backButton = 
            'id=com.Splitwise.SplitwiseMobile:id/backButton';
        this.doneButton = 
            'id=com.Splitwise.SplitwiseMobile:id/doneButton';
        this.termsAndConditionsLink = 
            'id=ccom.Splitwise.SplitwiseMobile:id/miscButton';
        this.searchCurrencyTextField = 
            'id=com.Splitwise.SplitwiseMobile:id/search_src_text';
        this.searchResult =
            'id=com.Splitwise.SplitwiseMobile:id/currencyCode';
        this.welcomeSliderText = 
            'id=com.Splitwise.SplitwiseMobile:id/middleText';
        this.welcomeScreenText =
            'id=com.Splitwise.SplitwiseMobile:id/welcomeToSplitwise';
    }
}

module.exports = new SplitwiseEnterDetailsScreen();
