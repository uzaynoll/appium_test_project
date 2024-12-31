const { remote } = require('webdriverio');

(async () => {
    const options = {
        capabilities: {
            alwaysMatch: {
                platformName: 'Android',
                'appium:deviceName': 'QUALCOMM F20',  // Vendor prefix 'appium:'
                'appium:udid': 'af8e6020',              // Vendor prefix 'appium:'
                'appium:platformVersion': '10.0',      // Vendor prefix 'appium:'
                'appium:automationName': 'UiAutomator2'
            },
            firstMatch: [{}]
        },
        host: '127.0.0.1',
        port: 4723,
        logLevel: 'debug'
    };

    const driver = await remote(options);

    try {
        //Agent Code
        await driver.$("//android.widget.EditText[@resource-id='drose.com.np.tabbanking:id/far_txtEditAgentID']").waitForDisplayed({ timeout: 5000 });
        const agentCode = driver.$("//android.widget.EditText[@resource-id='drose.com.np.tabbanking:id/far_txtEditAgentID']");
        await agentCode.setValue("Agent Code");

        //Agent Passcode1
        await driver.$("//android.widget.EditText[@resource-id='drose.com.np.tabbanking:id/far_txtEditPassCode1']").waitForDisplayed({ timeout: 5000 });
        const agentPasscode1 = driver.$("//android.widget.EditText[@resource-id='drose.com.np.tabbanking:id/far_txtEditPassCode1']");
        await agentPasscode1.setValue("Agent Passcode1");

        //Agent Passcode2
        await driver.$("//android.widget.EditText[@resource-id='drose.com.np.tabbanking:id/far_txtEditPassCode2']").waitForDisplayed({ timeout: 5000 });
        const agentPasscode2 = driver.$("//android.widget.EditText[@resource-id='drose.com.np.tabbanking:id/far_txtEditPassCode2']");
        await agentPasscode2.setValue("Agent Passcode2");

        //Login Button
        await driver.$('//android.widget.Button[@resource-id="drose.com.np.tabbanking:id/btnProceed"]').waitForDisplayed({ timeout: 5000 });
        const agentLoginButton = driver.$('//android.widget.Button[@resource-id="drose.com.np.tabbanking:id/btnProceed"]');
        await agentLoginButton.click();
        
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await driver.deleteSession();
    }
})();
