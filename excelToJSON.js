const xl= require('xlsx')
const fs= require('fs')
const workbook=xl.readFile('./excelWorkbook.xlsx')
const sheetName='tables'
const workSheet=workbook.Sheets[sheetName]
const jsonData=xl.utils.sheet_to_json(workSheet)
fs.writeFileSync('jsonOfExcel.json',JSON.stringify(jsonData,null,2))

console.log('JSON Generated')

