import signIn from '../../api/sign.in.js';
import signInObj from '../../page_objects/common_pages/sign.in.obj.js';
import orgSelection from '../../api/orgSelection.js';
import orgSelectObj from '../../page_objects/common_pages/orgSelect.obj.js';
import prescription from '../../api/prescription.js';
import prescriptionObj from '../../page_objects/common_pages/prescription.obj.js';
import { readFile } from 'fs/promises';
const json = JSON.parse(await readFile(new URL('../../test_data/data.json', import.meta.url)));
const prescriptionData = JSON.parse(await readFile(new URL('../../test_data/prescriptionData.json', import.meta.url)));

describe('Sign in Test Cases', () => {
    it('Input bmdc, password and click login', async() => {
        await signIn.signInAction(json.bmdc, json.password);
        await expect(await driver.getElementText(orgSelectObj.orgTxt)).toBe('Select Organization');
    });
    it('Select Organization', async () => {
        await orgSelection.orgSelectAction();
        await expect(await driver.getElementText(orgSelectObj.drugsTabTxt)).toBe('Drugs');
    });
});
describe('Prescription Test Cases', () => {
    it('Create a patient', async() => {
        await prescription.createPatientAction(prescriptionData.patientName,prescriptionData.phone,prescriptionData.age,prescriptionData.patientNameEdit);
        await expect(await driver.getElementText(prescriptionObj.patientTxt)).toBe('Patient');
    });
    it('Create a prescription', async() => {
        await prescription.createPrescriptionAction(prescriptionData.complaint,prescriptionData.value,prescriptionData.duration,prescriptionData.details,prescriptionData.medicine,prescriptionData.dose,prescriptionData.advice,prescriptionData.diagnosis,prescriptionData.investigation,prescriptionData.name);
        await expect(await driver.getElementText(prescriptionObj.printTxt)).toBe('Print');
    });
    it('Edit the prescription', async() => {
        await prescription.editPrescriptionAction(prescriptionData.medicine,prescriptionData.dose,prescriptionData.duration,prescriptionData.details);
        await expect(await driver.getElementText(prescriptionObj.printTxt)).toBe('Print');
    });
    it('Share the prescription', async() => {
        await prescription.sharePrescriptionAction(prescriptionData.email);
        await expect(await driver.getElementText(orgSelectObj.drugsTabTxt)).toBe('Drugs');
    });
});
describe('Log out Test Case', () => {
    it('Click on the logout button', async () => {
        await signIn.signOutAction();
        await expect(await driver.getElementText(signInObj.loginTxt)).toBe('Log In');
    });
});