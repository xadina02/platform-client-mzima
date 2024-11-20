import ExportTagDataFunctions from '../../functions/ExportTagDataFunctions';

const exportTagDataFunctions = new ExportTagDataFunctions();

describe('Export All Tag Data', () => {
  it('Exports all the data', () => {
    exportTagDataFunctions.confirm_all_data_export();
  })
})

describe('Export Select Tag Data', () => {
  it('Exports data of select fields', () => {
    exportTagDataFunctions.confirm_select_data_export();
  })
})

describe('Cancel Export', () => {
  it('Cancels the data exporting process', () => {
    exportTagDataFunctions.cancel_data_export();
  })
})