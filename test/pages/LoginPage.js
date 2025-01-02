import Helper from '../../helpers/utilities.js';

class LoginPage {
    static agentCodeField = "//android.widget.EditText[@resource-id='drose.com.np.tabbanking:id/far_txtEditAgentID']";
    static passcode1Field = "//android.widget.EditText[@resource-id='drose.com.np.tabbanking:id/far_txtEditPassCode1']";
    static passcode2Field = "//android.widget.EditText[@resource-id='drose.com.np.tabbanking:id/far_txtEditPassCode2']";
    static loginButton = "//android.widget.Button[@resource-id='drose.com.np.tabbanking:id/btnProceed']";

    static async enterAgentCode(driver, agentCode) {
        await Helper.setValue(driver, this.agentCodeField, agentCode);
    }

    static async enterPasscode1(driver, passcode) {
        await Helper.setValue(driver, this.passcode1Field, passcode);
    }

    static async enterPasscode2(driver, passcode) {
        await Helper.setValue(driver, this.passcode2Field, passcode);
    }

    static async clickLogin(driver) {
        await Helper.clickElement(driver, this.loginButton);
    }
}

export default LoginPage;
