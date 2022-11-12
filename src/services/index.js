const date = new Date()
const today = date.getTime()

export const searchValidation = (search) => {
  if(search.length < 1)  {
    alert('Digite uma hashtag!')
    return false
  }
  if(search.length > 100) {
    alert('Sua hashtag ultrapasou o limite de 100 caracteres!!')
    return false
  }

  return true
}

import Airtable from "airtable"
var base = new Airtable({apiKey: 'keyz8BAZKCTGY5dB1'}).base('app6wQWfM6eJngkD4');

export const recordSearches = async (hashtag) => {
  base('Buscas').create([
    {
      "fields": {"Squad":"08-22","Hashtag":`${hashtag}`,"Data":today}
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
}



