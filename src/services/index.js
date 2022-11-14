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

// Retorna um array de objetos contendo os membros da equipe.

export const listMembers = ()=> {
  return new Promise((resolve, reject) => {
    let time = []
    base('Equipe').select({
      maxRecords: 4,
      view: "Grid s8"
  }).eachPage(function page(records, fetchNextPage) {  
      records.forEach(function(record) {
          time.push(record.fields);
      });
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










