import ExportTagDataLocators from '../locators/ExportTagDataLocators';

class ExportTagDataFunctions {
  select_data_fields() {
    // Write logic to select some data fields from the listed survey categories on the page
  }

  click_select_fields_button() {
    cy.get(ExportTagDataLocators.SelectFieldsButton).click();
  }

  export_data() {
    cy.get(ExportTagDataLocators.ExportDataButton).click();
  }

  launch_export_page() {
    cy.get(ExportTagDataLocators.SettingsBtn).click();
    cy.get(ExportTagDataLocators.ExportAndTagDataButton).click();
  }

  cancel_export() {
    cy.get(ExportTagDataLocators.CancelExportBtn).click();
    cy.reload();
  }

  verify_successful_export_messages() {
    let messageData1 = `We are preparing your CSV file. This may take a few moments. You can leave this page if you want. We will let you know when we're done.`;
    let messageData2 = `Upload complete. You should see your tagged data in your HDX account.`;

    cy.get(ExportTagDataLocators.MessageContainer).should('have.value', messageData1);
    cy.get(ExportTagDataLocators.MessageContainer).should('have.value', messageData2);
  }

  export_all_tag_data() {
    this.launch_export_page();
    this.export_data();
  }

  export_select_tag_data() {
    this.launch_export_page();
    this.click_select_fields_button();
    this.select_data_fields();
    this.export_data();
  }

  confirm_all_data_export() {
    this.export_all_tag_data();
    this.verify_successful_export_messages();
  }

  confirm_select_data_export() {
    this.export_select_tag_data();
    this.verify_successful_export_messages();
  }

  cancel_data_export() {
    this.export_all_tag_data();
    this.cancel_export();
  }
}

export default ExportTagDataFunctions;
