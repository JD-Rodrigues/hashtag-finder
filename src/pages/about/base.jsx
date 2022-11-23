import React from "react";
import Airtable from "airtable"

//  var Airtable = require('airtable');
// var base = new Airtable({apiKey: 'keyz8BAZKCTGY5dB1'}).base('app6wQWfM6eJngkD4');

var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyz8BAZKCTGY5dB1'
});
var base = Airtable.base('app6wQWfM6eJngkD4');

function getRecords() {
    base('Projeto').select({
        view: 'Grid view'
    }).firstPage(function(err, records) {
        if (err) { console.error(err); return; }
        records.forEach(function(record) {
            console.log('Retrieved', record.get('Squad'));
        });
    });
}
export default getRecords;