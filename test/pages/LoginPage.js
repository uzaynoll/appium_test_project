import Helper from '../../helpers/utilities.js';

class LoginPage {
    static agentCodeField = "//android.widget.EditText[@resource-id='drose.com.np.tabbanking:id/far_txtEditAgentID']";
    static passcode1Field = "//android.widget.EditText[@resource-id='drose.com.np.tabbanking:id/far_txtEditPassCode1']";
    static passcode2Field = "//android.widget.EditText[@resource-id='drose.com.np.tabbanking:id/far_txtEditPassCode2']";
    static loginButton = "//android.widget.Button[@resource-id='drose.com.np.tabbanking:id/btnProceed']";

    static async enterAgentCode(agentCode) {
        await Helper.setValue(this.agentCodeField, agentCode);
    }

    static async enterPasscode1(passcode) {
        await Helper.setValue(this.passcode1Field, passcode);
    }

    static async enterPasscode2(passcode) {
        await Helper.setValue(this.passcode2Field, passcode);
    }

    static async clickLogin() {
        await Helper.clickElement(this.loginButton);
    }
}

export default LoginPage;
