import prescriptionObj from "../page_objects/common_pages/prescription.obj.js";

class prescription{
    async createPatientAction (patientName,phone,age,patientNameEdit){
        await driver.elementClick(prescriptionObj.patientTab);
        await driver.elementClick(prescriptionObj.newPatient);
        await driver.elementSendKeys((prescriptionObj.newPatientName), patientName);
        await driver.elementSendKeys((prescriptionObj.newPatientPhone), phone);
        await driver.elementSendKeys((prescriptionObj.newPatientAgeYear), age);
        await driver.elementClick(prescriptionObj.newPatientGen);
        await driver.elementClick(prescriptionObj.saveBtn);
        await driver.elementClick(prescriptionObj.newPatientSelect);
        await driver.elementClick(prescriptionObj.newPatientEdit);
        await driver.elementSendKeys((prescriptionObj.newPatientEditName), patientNameEdit);
        await driver.elementClick(prescriptionObj.saveBtn);
    }
    // Create prescription is initiated from the created patient's details page
    async createPrescriptionAction (complaint,value,duration,details,medicine,dose,advice,diagnosis,investigation,name){
        await driver.elementClick(prescriptionObj.newRx);

    // Complaint
        await driver.elementClick(prescriptionObj.complaintSearch)
        await driver.elementSendKeys((prescriptionObj.complaintSearch), complaint);
        await driver.elementClick(prescriptionObj.complaintSelect);
        await driver.elementClick(prescriptionObj.complaintSelect);
        await driver.elementSendKeys((prescriptionObj.value), value);
        await driver.elementSendKeys((prescriptionObj.complaintDuration), duration);
        await driver.elementClick(prescriptionObj.complaintDurationDropdown);
        await driver.elementClick(prescriptionObj.complaintDurationDropdownSelect);   // "Day" is selected 
        await driver.elementSendKeys((prescriptionObj.complaintDetails), details);
        await driver.elementClick(prescriptionObj.doneBtn);

    // Medication
        await driver.elementClick(prescriptionObj.medicationTab);
        await driver.elementClick(prescriptionObj.medicationSearch);
        await driver.elementSendKeys((prescriptionObj.medicationSearch), medicine);
        await driver.elementClick(prescriptionObj.medicationSelect);
        await driver.elementClick(prescriptionObj.medicationDetails);
        await driver.elementClick(prescriptionObj.medicationSchedule);
        await driver.elementClick(prescriptionObj.medicationScheduleSelect);   // "3" is selected
        await driver.elementClick(prescriptionObj.medicationUnit);
        await driver.elementClick(prescriptionObj.medicationUnitSelect);   // "spoon" is selected
        await driver.elementSendKeys((prescriptionObj.medicationDose1), dose);
        await driver.elementSendKeys((prescriptionObj.medicationDose2), dose);
        await driver.elementSendKeys((prescriptionObj.medicationDose3), dose);
        await driver.elementSendKeys((prescriptionObj.medicationDuration), duration);
        await driver.elementClick(prescriptionObj.medicationDurationDropdown);
        await driver.elementClick(prescriptionObj.medicationDurationDropdownSelect);   // "Month" is selected
        await driver.elementSendKeys((prescriptionObj.medicationRemarks), details);
        await driver.elementClick(prescriptionObj.doneBtn);
        await driver.elementClick(prescriptionObj.medicationSearch);
        await driver.elementSendKeys((prescriptionObj.medicationSearch), medicine);
        await driver.elementClick(prescriptionObj.medicationSelect2);
        await driver.elementClick(prescriptionObj.medicationDetails2);
        await driver.elementClick(prescriptionObj.medicationDurationCtn);
        await driver.elementClick(prescriptionObj.medicationSaveDose);
        await driver.elementClick(prescriptionObj.doneBtn);
        await driver.elementClick(prescriptionObj.customMedication);
        await driver.elementSendKeys((prescriptionObj.customMedicationName), name);
        await driver.elementClick(prescriptionObj.medicationSchedule);
        await driver.elementClick(prescriptionObj.medicationScheduleSelect);   // "3" is selected
        await driver.elementClick(prescriptionObj.medicationUnit);
        await driver.elementClick(prescriptionObj.medicationUnitSelect);   // "spoon" is selected
        await driver.elementSendKeys((prescriptionObj.medicationDose1), dose);
        await driver.elementSendKeys((prescriptionObj.medicationDose2), dose);
        await driver.elementSendKeys((prescriptionObj.medicationDose3), dose);
        await driver.elementSendKeys((prescriptionObj.medicationDuration), duration);
        await driver.elementClick(prescriptionObj.medicationDurationDropdown);
        await driver.elementClick(prescriptionObj.medicationDurationDropdownSelect);   // "Month" is selected
        await driver.elementSendKeys((prescriptionObj.medicationRemarks), details);
        await driver.elementClick(prescriptionObj.doneBtn);

    // Advice
        await driver.elementClick(prescriptionObj.adviceTab);
        await driver.elementClick(prescriptionObj.adviceSearch);
        await driver.elementSendKeys((prescriptionObj.adviceSearch), advice);
        await driver.elementClick(prescriptionObj.adviceSelect);
        await driver.elementClick(prescriptionObj.adviceSelect);
        await driver.elementSendKeys((prescriptionObj.value), value);
        await driver.elementSendKeys((prescriptionObj.adviceDetails), details);
        await driver.elementClick(prescriptionObj.doneBtn);

    // Diagnosis
        await driver.elementClick(prescriptionObj.diagnosisTab);
        await driver.elementClick(prescriptionObj.diagnosisSearch);
        await driver.elementSendKeys((prescriptionObj.diagnosisSearch), diagnosis);
        await driver.elementClick(prescriptionObj.diagnosisSelect);
        await driver.elementClick(prescriptionObj.diagnosisSelect);
        await driver.elementSendKeys((prescriptionObj.value), value);
        await driver.elementSendKeys((prescriptionObj.diagnosisDetails), details);
        await driver.elementClick(prescriptionObj.doneBtn);

    // Investigation
        await driver.elementClick(prescriptionObj.investigationTab);
        await driver.elementClick(prescriptionObj.investigationSearch);
        await driver.elementSendKeys((prescriptionObj.investigationSearch), investigation);
        await driver.elementClick(prescriptionObj.investigationSelect);
        await driver.elementClick(prescriptionObj.investigationSelect);
        await driver.elementSendKeys((prescriptionObj.value), value);
        await driver.elementClick(prescriptionObj.investigationDate);
        await driver.elementClick(prescriptionObj.okBtn);
        await driver.elementSendKeys((prescriptionObj.investigationDetails), details);
        await driver.elementClick(prescriptionObj.doneBtn);
        await driver.elementClick(prescriptionObj.customInvestigation);
        await driver.elementSendKeys((prescriptionObj.customInvestigationName), name);
        await driver.elementSendKeys((prescriptionObj.value), value);
        await driver.elementClick(prescriptionObj.investigationDate);
        await driver.elementClick(prescriptionObj.okBtn);
        await driver.elementSendKeys((prescriptionObj.investigationDetails), details);
        await driver.elementClick(prescriptionObj.doneBtn);

    // Follow-up
        await driver.elementClick(prescriptionObj.followUpTab);
        await driver.elementClick(prescriptionObj.followUpSelect);
        await driver.elementClick(prescriptionObj.followUpDaySelect);   // "7 days" is selected
        await driver.elementClick(prescriptionObj.doneBtn);
        await driver.elementClick(prescriptionObj.viewRx);
        await driver.elementClick(prescriptionObj.viewRxback);
        await driver.elementClick(prescriptionObj.saveRx);
    }
    async editPrescriptionAction (){
        await driver.elementClick(prescriptionObj.editRx);
        await driver.elementClick(prescriptionObj.medicationTab);
        await driver.elementClick(prescriptionObj.altMedicine);
        await driver.elementClick(prescriptionObj.medicationAltBrands);
        await driver.elementClick(prescriptionObj.altMedicineSelect);
        await driver.elementClick(prescriptionObj.medicationSchedule);
        await driver.elementClick(prescriptionObj.medicationScheduleSelect);   // "3" is selected
        await driver.elementClick(prescriptionObj.medicationUnit);
        await driver.elementClick(prescriptionObj.medicationUnitSelect);   // "spoon" is selected
        await driver.elementClick(prescriptionObj.medicationDurationDropdown);
        await driver.elementClick(prescriptionObj.medicationDurationDropdownSelect);   // "Month" is selected
        await driver.elementClick(prescriptionObj.medicationSaveDose);
        await driver.elementClick(prescriptionObj.doneBtn);
        await driver.elementClick(prescriptionObj.updateRx);
    }
    async sharePrescriptionAction (email){
        await driver.elementClick(prescriptionObj.sms);       
        await driver.elementClick(prescriptionObj.send);
        await driver.elementClick(prescriptionObj.email);
        await driver.elementSendKeys((prescriptionObj.emailTxt), email);
        await driver.elementClick(prescriptionObj.send);
        await driver.elementClick(prescriptionObj.backBtn);
        await driver.elementClick(prescriptionObj.backBtn);
        await driver.elementClick(prescriptionObj.backBtn);
        await driver.elementClick(prescriptionObj.backBtn);
    }
}
export default new prescription();