class Helper {
    static async getElement(locator) {
        return $(locator);
    }

    static async waitForDisplayed(locator, timeout = 5000) {
        const element = await this.getElement(locator);
        await element.waitForDisplayed({ timeout });
        return element;
    }

    static async setValue(locator, value) {
        const element = await this.waitForDisplayed(locator);
        await element.setValue(value);
    }

    static async clickElement(locator) {
        const element = await this.waitForDisplayed(locator);
        await element.click();
    }
}

export default Helper;
