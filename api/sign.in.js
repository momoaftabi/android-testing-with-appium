import signInObj from "../page_objects/common_pages/sign.in.obj.js";

class signIn {
    async signInAction(bmdc, password) {
        await driver.elementClick(signInObj.doctorType);
        await driver.elementSendKeys((signInObj.bmdcNumberTxt), bmdc);
        await driver.elementSendKeys((signInObj.passwordTxt), password);
        await driver.elementClick(signInObj.logInBtn);
    }
    async signOutAction() {
        await driver.elementClick(signInObj.profileTab);
        await driver.elementClick(signInObj.logoutBtn);
    }
}
export default new signIn();