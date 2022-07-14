class SplitwiseActivityScreen {
    constructor() {
        this.header =
            '(//android.widget.FrameLayout[@content-desc="Activity"])[1]';
        this.firstTextView = 
            '(//android.widget.TextView)[1]';
    }
}

module.exports = new SplitwiseActivityScreen();
