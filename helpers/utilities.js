class Helper {
    static async getElement(driver, locator) {
        return await driver.$(locator);
    }

    static async waitForDisplayed(driver, locator, timeout = 5000) {
        const element = await this.getElement(driver, locator);
        await element.waitForDisplayed({ timeout });
    }

    static async setValue(driver, locator, value, timeout = 5000) {
        const element = await this.getElement(driver, locator);
        await this.waitForDisplayed(driver, locator, { timeout });
        await element.setValue(value);
    }

    static async clickElement(driver, locator, timeout = 5000) {
        const element = await this.getElement(driver, locator);
        await this.waitForDisplayed(driver, locator, { timeout });
        await element.click();
    }
}

export default Helper;
