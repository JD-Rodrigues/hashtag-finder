import React, {useEffect, useState} from "react";
import Airtable from "airtable";
import Proj from './Proj'

const base = new Airtable({apiKey: "keyz8BAZKCTGY5dB1"}).base("app6wQWfM6eJngkD4");

function App() {
    cons [Projeto, setProjeto] = useState([])

    useEffect(() => {
    base("Projeto")
    .select({view: 'Grid s8'})
    .eachPage((records, fetchNextPage) => {
      
      setProjeto(records);
      fetchNextPage();
    });
    }, []);

    return (
    <>
        {Projeto.map(proj => (
            <Proj
                key={proj.id}
                proj={proj}
                />
        ))}

    </>)
}

//export default App;


// ------------------------------------------------


function aboutTextBlock()  {
  base('Projeto').find('recQKaT4FDiz8edJM', 
  function(err, record) {
    if (err) { console.error(err); return; }
    console.log('Retrieved', record.fields.Sobre);
    return('Retrieved', record.fields.Sobre);
})
}
export default aboutTextBlock()




//---------------------------------------------------











/*
import Airtable from "airtable";
import  { useEffect } from "react";


  
    const base = new Airtable({apiKey: "keyz8BAZKCTGY5dB1"}).base("app6wQWfM6eJngkD4");
  
    function App(){
      
      
      useEffect(() => {
        base("Projeto")
        .select({view: 'Grid s8'})
        .eachPage((records, fetchNextPage) => {
          
          console.log(records);
          fetchNextPage();
        })
      }, []);
    }
     App()


     export default App


     */