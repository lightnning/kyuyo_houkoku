'use strict'

class DataSheet {
  constructor(ssId, shName,) {
    this.ssId = ssId;
    this.shName = shName;
    this.targetSh = SpreadsheetApp.openById(this.ssId).getSheetByName(this.shName);
    this.values = this.targetSh.getDataRange().getValues();
  }

  toObj() {
    const [headers, ...records] = this.values;  //１行目がヘッダー、以降がレコード...(分割代入)
    const objects = records.map(record => Object.fromEntries(record.
      map((value, i) => [headers[i], value])
    ));
    return objects;
  }
}
