const date = new Date()
const today = date.getTime()

// Valida o campo de buscas
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


//Registra as buscas em uma tabela do Airtable
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


export const listMembers = ()=> {
  return new Promise((resolve, reject) => {
    let time = []
    base('Equipe').select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 3,
      view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.
  
      records.forEach(function(record) {
          time.push(record.fields);
      });
  
      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
  
  }, function done(err) {
      if (err) {
         console.error(err); 
         return; 
      } else {
        resolve(time)
      }
  });
  })
}


export const time = await listMembers()










