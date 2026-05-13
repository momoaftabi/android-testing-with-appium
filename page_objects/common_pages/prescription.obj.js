const find = await import('appium-flutter-finder');

class prescriptionObj {
// Patient Objects    
    get patientTab() {
        return find.byValueKey('home_patient');
    }
    get newPatient() {
        return find.byValueKey('new_patient');
    }
    get newPatientName() {
        return find.byValueKey('patient_name');
    }
    get newPatientPhone() {
        return find.byValueKey('phone_number');
    }
    get newPatientAgeYear() {
        return find.byValueKey('year');
    }
    get newPatientGen() {
        return find.bySemanticsLabel('Other');
    }
    get saveBtn() {
        return find.byValueKey('save_create');
    }
    get newPatientSelect() {
        return find.byText('Pre Patient');
    }
    get newPatientEdit() {
        return find.byValueKey('edit_patient');
    }
    get newPatientEditName() {
        return find.byValueKey('patient_name');
    }
    get newRx() {
        return find.byValueKey('new_rx');
    }
    get patientTxt() {
        return find.byText('Patient');
    }

// Complaint Objects
    get complaintTab() {
        return find.bySemanticsLabel('Complaint\nTab 1 of 6');
    }
    get complaintSearch() {
        return find.byValueKey('complaint_search');
    }
    get complaintSelect() {
        return find.bySemanticsLabel('Pain');
    }
    get value() {
        return find.byValueKey('value');
    }
    get complaintDuration() {
        return find.byValueKey('for');
    }
    get complaintDurationDropdown() {
        return find.byValueKey('dropdown_duration');
    }
    get complaintDurationDropdownSelect() {
        return find.bySemanticsLabel('Day');
    }
    get complaintDetails() {
        return find.byValueKey('complaint_details');
    }
    get doneBtn() {
        return find.byValueKey('done');
    }

// Medication Objects
    get medicationTab() {
        return find.bySemanticsLabel('Medication\nTab 2 of 6');
    }
    get medicationSearch() {
        return find.byValueKey('medication_search');
    }
    get medicationSelect() {
        return find.bySemanticsLabel('ACE SYRUP 60ml');
    }
    get medicationSelect2() {
        return find.bySemanticsLabel('ACE SYRUP 100ml');
    }
    get medicationDetails() {
        return find.byText('ACE SYRUP 60ml');
    }
    get medicationDetails2() {
        return find.byText('ACE SYRUP 100ml');
    }
    get medicationSchedule() {
        return find.byValueKey('dropdown_schedule');
    }
    get medicationScheduleSelect() {
        return find.bySemanticsLabel('3');
    }
    get medicationUnit() {
        return find.byValueKey('dropdown_unit');
    }
    get medicationUnitSelect() {
        return find.bySemanticsLabel('spoon');
    }
    get medicationDose1() {
        return find.byValueKey('dose_0');
    }
    get medicationDose2() {
        return find.byValueKey('dose_1');
    }
    get medicationDose3() {
        return find.byValueKey('dose_2');
    }
    get medicationDuration() {
        return find.byValueKey('duration');
    }
    get medicationDurationDropdown() {
        return find.byValueKey('dropdown_duration');
    }
    get medicationDurationDropdownSelect() {
        return find.bySemanticsLabel('Month');
    }
    get medicationRemarks() {
        return find.byValueKey('remarks');
    }
    get medicationDurationCtn() {
        return find.byValueKey('continue');
    }
    get medicationSaveDose() {
        return find.byValueKey('save_dose');
    }
    get medicationAltBrands() {
        return find.byValueKey('alternate_brands');
    }
    get medicationAddIntervalDose() {
        return find.byValueKey('add_interval_dose');
    }
    get customMedication() {
        return find.byValueKey('add_custom_medicine');
    }
    get customMedicationName() {
        return find.byValueKey('name');
    }

// Advice Objects
    get adviceTab() {
        return find.bySemanticsLabel('Advice\nTab 3 of 6');
    }
    get adviceSearch() {
        return find.byValueKey('advice_search');
    }
    get adviceSelect() {
        return find.bySemanticsLabel('drink water');
    }
    get adviceDetails() {
        return find.byValueKey('advice_details');
    }

// Diagnosis Objects
    get diagnosisTab() {
        return find.bySemanticsLabel('Diagnosis\nTab 4 of 6');
    }
    get diagnosisSearch() {
        return find.byValueKey('diagnosis_search');
    }
    get diagnosisSelect() {
        return find.bySemanticsLabel('Fever');
    }
    get diagnosisDetails() {
        return find.byValueKey('diagnosis_details');
    }

// Investigation Objects
    get investigationTab() {
        return find.bySemanticsLabel('Investigation\nTab 5 of 6');
    }
    get investigationSearch() {
        return find.byValueKey('investigation_search');
    }
    get investigationSelect() {
        return find.bySemanticsLabel('Dengue Antibody');
    }
    get investigationDate() {
        return find.byValueKey('date');
    }
    get okBtn() {
        return find.bySemanticsLabel('OK');
    }
    get investigationDetails() {
        return find.byValueKey('investigation_details');
    }
    get customInvestigation() {
        return find.byValueKey('add_custom_investigation');
    }
    get customInvestigationName() {
        return find.byValueKey('name');
    }

// Follow-up Objects
    get followUpTab() {
        return find.bySemanticsLabel('Follow-up\nTab 6 of 6');
    }
    get followUpSelect() {
        return find.byValueKey('select_date_for_follow_up');
    }
    get followUpDaySelect() {
        return find.bySemanticsLabel('7 days');
    }
    get viewRx() {
        return find.byValueKey('view');
    }
    get viewRxback() {
        return find.byValueKey('back');
    }
    get saveRx() {
        return find.byValueKey('save_rx');
    }
    get printTxt() {
        return find.byText('Print');
    }

// Edit Prescripton Objects
    get editRx() {
        return find.bySemanticsLabel('Edit Rx');
    }
    get altMedicine() {
        return find.byText('ACE SYRUP 60ml');
    }
    get altMedicineSelect() {
        return find.byText('NAPA');
    }
    get updateRx() {
        return find.byValueKey('update_rx');
    }

// Share prescription Objects
    get sms() {
        return find.byValueKey('sms');
    }
    get send() {
        return find.bySemanticsLabel('Send');
    }
    get email() {
        return find.byValueKey('email');
    }
    get emailTxt() {
        return find.byValueKey('input_field');
    }
    get backBtn() {
        return find.byValueKey('back_button');
    }
}
export default new prescriptionObj();