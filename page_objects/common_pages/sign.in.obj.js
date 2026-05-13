const find = await import('appium-flutter-finder');

class signInObj {
    get bmdcNumberTxt() {
        return find.byValueKey('bmdc');
    }
    get passwordTxt() {
        return find.byValueKey('password');
    }
    get logInBtn() {
        return find.byValueKey('login');
    }
    get doctorType() {
        return find.bySemanticsLabel('Medical');
    }
    get profileTab() {
        return find.byValueKey('profile');
    }
    get logoutBtn() {
        return find.byValueKey('logout');
    }
    get loginTxt() {
        return find.byText('Log In');
    }
}
export default new signInObj();