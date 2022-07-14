
class ActionHelper {

    static launchBrowserUrl(urlToLaunch) {
        browser.url(urlToLaunch)
    }

    static getTitle() {
        return browser.getTitle();
    }

    static launchApp() {
        driver.launchApp();
        driver.setImplicitTimeout(5000);
    }

    static switchToNativeContext() {
        browser.switchContext('NATIVE_APP');
    }

    static pause(seconds) {
        browser.pause(seconds * 1000);
    }

    static isVisible(locator) {
        return $(locator).isDisplayed() ? true : false;
    }

    static click(locator) {
        $(locator).click();
    }

    static waitForElement(locator, waitTimeInSeconds) {
        $(locator).waitForDisplayed(waitTimeInSeconds * 1000);
    }

    static clearText(locator) {
        $(locator).clearValue();
    }

    static sendText(locator, inputText) {
        $(locator).addValue(inputText);
    }

    static getText(locator) {
        return $(locator).getText();
    }

    static scrollToTextViewAndClick(text) {
        $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().textContains("${text}"))`).click();
    }

    static clickByTextInView(text) {
        $(`//android.widget.TextView[contains(@text,"${text}")]`).click()
    }
    static swipeRightToLeft(count) {
        const anchorPercentage = 50
        const startPointPercentage = 90
        const endPointPercentage = 10

        const {height, width} = driver.getWindowSize()
        const anchor = height * anchorPercentage / 100
        const startPoint = width * startPointPercentage / 100
        const endPoint = width * endPointPercentage / 100

        for (let swipeTime = 0; swipeTime < count; swipeTime++){
            driver.touchPerform([
                {
                    action: 'press',
                    options: {
                        x: startPoint,
                        y: anchor
                    }
                },
                {
                    action: 'wait',
                    options: {ms: 1000}
                },
                {
                    action: 'moveTo',
                    options: {
                        x: endPoint,
                        y: anchor
                    }
                },
                {
                    action: 'release',
                    options: {}
                }
            ])
        }
    }
}



module.exports = ActionHelper;
