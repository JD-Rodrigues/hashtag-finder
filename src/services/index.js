import Airtable from "airtable"
import axios from 'axios';


const date = new Date()
const today = date.getTime()
const base = new Airtable({apiKey: 'keyz8BAZKCTGY5dB1'}).base('app6wQWfM6eJngkD4');





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
  console.log(time)
  })
}

export const time = await listMembers()



export const bText = ()=> {
  return new Promise((resolve, reject) => {
    let time2 = []
    base('Projeto').select({
      maxRecords: 1,
      view: "Grid s8"
  }).eachPage(function page(records, fetchNextPage) {  
      records.forEach(function(record) {
          time2.push(record.fields);
      });
      fetchNextPage();
  
  }, function done(err) {
      if (err) {
         console.error(err); 
         return; 
      } else {
        resolve(time2)
      }
  });
  console.log(time2)
  })
  
}

export const time2 = await bText()


// Recebe uma hastag e retorna os últimos tweets marcados com ela.
export const getLastTweets = async (hashtag) => {
  const encodedHashtag = encodeURI(hashtag)
  const endpointUrl = `https://cors.eu.org/https://api.twitter.com/2/tweets/search/recent?query=-has%3Amedia%20${encodedHashtag}&max_results=10&tweet.fields=author_id`; 
  

  const res = await fetch(endpointUrl, {
    method: 'GET',
    headers: {
      "User-Agent": "v2RecentSearchJS",
      "authorization": `Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX`,
      "Content-Type": "application/json",
  }
  })

  if (res.body) {
      return res.json();
  } else {
      throw new Error('Unsuccessful request');
  }
}

// Recebe uma hastag e retorna os últimos tweets marcados com ela e contendo imagens
export const getLastTweetsWithImages = async (hashtag) => {
  const encodedHashtag = encodeURI(hashtag)
  const endpointUrl = `https://cors.eu.org/https://api.twitter.com/2/tweets/search/recent?query=has%3Amedia%20${encodedHashtag}&max_results=100&tweet.fields=author_id`; 
  

  const res = await fetch(endpointUrl, {
    method: 'GET',
    headers: {
      "User-Agent": "v2RecentSearchJS",
      "authorization": `Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX`,
      "Content-Type": "application/json",
  }
  })

  if (res.body) {
      return res.json();
  } else {
      throw new Error('Unsuccessful request');
  }
}


//Recebe o id de um tweet e retorna informações sobre ele. A URL pode ser obtida acessando o retorno através de "data.data[0].entities.urls[0].url" e a imagem em "data.includes.media[0].url".
const getTweetInfo = async (id) => {
  const endpointUrl = `https://api.twitter.com/2/tweets?ids=${id}&tweet.fields=attachments,entities,geo,id,author_id,text&expansions=attachments.media_keys&media.fields=url`; 
  

  const res = await fetch(endpointUrl, {
    method: 'GET',
    headers: {
      "User-Agent": "v2RecentSearchJS",
      "authorization": `Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX`,
      "Content-Type": "application/json",
  }
  })

  if (res.body) {
      return res.json();
  } else {
      throw new Error('Unsuccessful request');
  }
}

// getLastTweets('briga').then(data=>console.log(data))
getTweetInfo('1593446648604155909').then(data=>console.log(data.data[0]))






