// Google Apps Script — paste this in Extensions > Apps Script
// 1. Create a Google Sheet (any name)
// 2. Extensions > Apps Script > paste this code > Deploy > New deployment > Web app
// 3. Set "Execute as: Me", "Who has access: Anyone"
// 4. Copy the web app URL and paste into script.js as NEWSLETTER_ENDPOINT

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Subscribers');
    if (!sheet) {
      SpreadsheetApp.getActiveSpreadsheet().insertSheet('Subscribers').appendRow(['Date', 'Email', 'Source']);
    }
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Subscribers')
      .appendRow([new Date(), e.parameter.email, e.parameter.source || 'Website']);

    MailApp.sendEmail({
      to: 'nexdoadventours@gmail.com',
      subject: 'New Newsletter Subscriber',
      htmlBody: '<h2>New Subscriber</h2>' +
        '<p><strong>Email:</strong> ' + e.parameter.email + '</p>' +
        '<p><strong>Source:</strong> ' + (e.parameter.source || 'Website') + '</p>' +
        '<p><strong>Date:</strong> ' + new Date() + '</p>' +
        '<p><em>This is an automated notification from your Nexdo Adventours site.</em></p>'
    });

    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({ success: false }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
