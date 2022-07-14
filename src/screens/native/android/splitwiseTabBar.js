class SplitwiseTabBar {
    constructor() {
        this.groupTabBar = 
            'id=com.Splitwise.SplitwiseMobile:id/groups';
        this.friendsTabBar =
            'id=com.Splitwise.SplitwiseMobile:id/friends';
        this.activityTabBar =
            'id=com.Splitwise.SplitwiseMobile:id/activity';
        this.accountTabBar =
            'id=com.Splitwise.SplitwiseMobile:id/account';
        this.addExpenseButton =
            'id=com.Splitwise.SplitwiseMobile:id/fab'
    }
}

module.exports = new SplitwiseTabBar();
