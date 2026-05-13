import signIn from '../../api/sign.in.js';
import signInObj from '../../page_objects/common_pages/sign.in.obj.js';
import orgSelection from '../../api/orgSelection.js';
import orgSelectObj from '../../page_objects/common_pages/orgSelect.obj.js';
import { readFile } from 'fs/promises';
const json = JSON.parse(await readFile(new URL('../../test_data/data.json', import.meta.url)));

describe('Sign In Test Case', () => {
    it('Input bmdc, password and click login', async() => {
        await signIn.signInAction(json.bmdc, json.password);
        await expect(await driver.getElementText(orgSelectObj.orgTxt)).toBe('Select Organization');
    });
    it('Select Organization', async () => {
        await orgSelection.orgSelectAction();
        await expect(await driver.getElementText(orgSelectObj.drugsTabTxt)).toBe('Drugs');
    });
});
describe('Log out Test Case', () => {
    it('Click on the logout button', async () => {
        await signIn.signOutAction();
        await expect(await driver.getElementText(signInObj.loginTxt)).toBe('Log In');
    });
});