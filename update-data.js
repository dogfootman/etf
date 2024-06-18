// // 

// // update.js
// const { GoogleSpreadsheet } = require('google-spreadsheet');

// // Google Sheets 스프레드시트 ID (예: https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit)
// const SPREADSHEET_ID = 'docs.google.com/spreadsheets/d/1puKRrTEAYzeP_YSnsQLRWJ--hxgGufcvrKP9I2vs5cs/edit';
// //https://docs.google.com/spreadsheets/d/1puKRrTEAYzeP_YSnsQLRWJ--hxgGufcvrKP9I2vs5cs/edit?usp=drive_link

// // API 키
// const API_KEY = process.env.API_KEY;

// // 데이터를 업데이트하는 함수
// async function updateSpreadsheet() {
//   const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

//   // API 키로 인증
//   doc.useApiKey(API_KEY);

//   // 스프레드시트 로드
//   await doc.loadInfo();

//   const sheet = doc.sheetsByIndex[0]; // 첫 번째 시트를 선택

//   // 기존 데이터 가져오기
//   const rows = await sheet.getRows();

//   // 새로운 데이터 추가 (예: 첫 번째 행의 첫 번째 셀을 'Hello, World!'로 업데이트)
//   if (rows.length > 0) {
//     rows[0].someColumn = 'Hello, World!';
//     await rows[0].save();
//   } else {
//     await sheet.addRow({ someColumn: 'Hello, World!' });
//   }

//   console.log('스프레드시트가 업데이트되었습니다.');
// }

// updateSpreadsheet().catch(console.error);

///////////

google.script.run.withSuccessHandler(function(data) {
  var table = document.getElementById('dataTable');
  data.forEach(function(row) {
    var tr = document.createElement('tr');
    row.forEach(function(cell) {
      var td = document.createElement('td');
      td.textContent = cell;
      tr.appendChild(td);
    });
    table.getElementsByTagName('tbody')[0].appendChild(tr);
  });
}).getSheetData();
