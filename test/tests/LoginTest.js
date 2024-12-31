import { initDriver, closeDriver } from '../../config/webdriver-config.js';
import LoginPage from '../pages/LoginPage.js';

describe('Login Test', () => {
    let driver;

    before(async () => {
        driver = await initDriver();
    });

    it('should log in with valid credentials', async () => {
        await LoginPage.enterAgentCode('Agent123');
        await LoginPage.enterPasscode1('Passcode1');
        await LoginPage.enterPasscode2('Passcode2');
        await LoginPage.clickLogin();
    });

    after(async () => {
        await closeDriver();
    });
});
