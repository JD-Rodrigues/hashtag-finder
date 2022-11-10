const date = new Date()
const today = date.getDate()

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyz8BAZKCTGY5dB1'}).base('app6wQWfM6eJngkD4');

base('Buscas').create([
  {
    "fields": {"Squad":"08-22","Hashtag":"paisagens","Data":today}
  }
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function (record) {
    console.log(record.getId());
  });
});