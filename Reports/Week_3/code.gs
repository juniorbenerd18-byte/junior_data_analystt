/**
 * Hospital Management System - Google Apps Script Backend
 * Web App serving HTML interface
 */

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Hospital Management System - MediCare')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
