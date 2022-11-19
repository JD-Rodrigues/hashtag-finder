import Airtable from "airtable"


const date = new Date()
const today = date.getTime()
const base = new Airtable({apiKey: 'keyz8BAZKCTGY5dB1'}).base('app6wQWfM6eJngkD4');


// Valida o campo de busca
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


//Valida os campos do login
export const validateLogin = async (email, senha) => {
  const login = await getLogin() 
  const user = login.filter(user => user.Email === email && user.Senha === senha);
  if (user.length > 0) {
    return true;
  } else {
    return false;
  }
}


// Obtém lista de usuários cadastrados
export const getLogin = () => {
  return new Promise ((resolve, reject) => {
    let logins = []

    base('Login').select({
      maxRecords: 3,
      view: "Squad 8"
    }).eachPage(function page(records, fetchNextPage) {
      records.forEach(function(record) {
          logins.push(record.fields);
      });
      fetchNextPage();
    
    }, function done(err) {
      if (err) { console.error(err); return; }
      else {
        resolve(logins)
      }
    });
  })
}


//Registra as buscas em uma tabela do Airtable
export const recordSearches = async (hashtag) => {
  base('Buscas').create([
    {
      "fields": {
        "Squad":"08-22",
        "Hashtag":`${hashtag}`,
        "Data":today
      }
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
      filterByFormula: "({Squad} = '08-22')",
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


// Recebe uma hastag e retorna os últimos tweets marcados com ela.
export const fetchLastTweets = async (hashtag) => {
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
export const fetchLastTweetsImages = async (hashtag) => {
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


// Recebe o id de um tweet e retorna informações sobre ele. 
// Obs.: A URL do tweet pode ser obtida acessando o retorno através de "data.data[0].entities.urls[0].url" e a url da imagem em "data.includes.media[0].url".
export const getTweetInfo = async (id) => {
  const endpointUrl = `https://cors.eu.org/https://api.twitter.com/2/tweets?ids=${id}&tweet.fields=attachments,entities,geo,id,author_id,text&expansions=attachments.media_keys&media.fields=url`; 
  

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


// Recebe um id de usuário (author_id) e retorna informações sobre o usuário.
export const getUserInfo = async (id) => {
  const endpointUrl = `https://cors.eu.org/https://api.twitter.com/2/users?ids=${id}&user.fields=created_at,description,entities,id,location,name,profile_image_url,url,username`; 
  

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


// Obtém e organiza as informações que serão inseridas em cada card de tweet, retornando um array de objetos, onde cada objeto conterá as informações p/ um card.
const selectTweetCardInfo = async (hashtag) => {  
  const lastTweetsByHashtag = await fetchLastTweets(hashtag)
  const tweets = await lastTweetsByHashtag.data
  
  const tweetCardsInfo = []

  for (let t in tweets) {
    const tweetInfo = await getTweetInfo(tweets[t].id)
    const userInfo = await getUserInfo(tweets[t].author_id)
    
    tweetCardsInfo.push({
      username: userInfo.data[0].username,
      userPic: userInfo.data[0].profile_image_url,
      text: tweetInfo.data[0].text,
      tweetId: tweetInfo.data[0].id,
    })
  }
  
  
  
  
  return tweetCardsInfo
  
}



selectTweetCardInfo('carro').then(data=>console.log(data))

// selectTweetCardInfo('dsadsd').then(data=>console.log(data))

// getTweetInfo('1593647734237569027').then(data=>console.log(data))
// getUserInfo('326915887').then(data=>console.log(data))




