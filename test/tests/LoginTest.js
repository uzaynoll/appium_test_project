import { initDriver, closeDriver } from '../../config/webdriver-config.js';
import LoginPage from '../pages/LoginPage.js';

describe('Login Test', function() {

    this.timeout(30000);

    let driver;

    before(async () => {
        driver = await initDriver();
    });

    it('should log in with valid credentials', async () => {
        await LoginPage.enterAgentCode(driver, 'Agent123');
        await LoginPage.enterPasscode1(driver, 'Passcode1');
        await LoginPage.enterPasscode2(driver, 'Passcode2');
        await LoginPage.clickLogin(driver);
    });

    after(async () => {
        await closeDriver();
    });
});
