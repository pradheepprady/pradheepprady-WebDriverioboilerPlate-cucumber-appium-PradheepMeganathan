class SplitWiseCredentialsScreen{
    constructor(){
        this.emailAddressTextField =
            'id=com.Splitwise.SplitwiseMobile:id/emailInputField';
        this.passWordTextField =
            'id=com.Splitwise.SplitwiseMobile:id/passwordInputField';
        this.loginButton =
            'id=com.Splitwise.SplitwiseMobile:id/loginButton';
        this.fpwLink = 'com.Splitwise.SplitwiseMobile:id/forgotPasswordButton';
    }
}

module.exports = new SplitWiseCredentialsScreen();
