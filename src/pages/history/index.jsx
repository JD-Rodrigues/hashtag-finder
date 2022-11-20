import { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { ListHastag } from "../../components/listHastag/ListHastag";

// os estilos são importados pela styles
import styles from "./history.module.css";

export const History = () => {
  //estados

  //hashtags listadas
  const [hashtagData, setHashtagData] = useState([]);
  //busca novas requesições
  const [currentPage, setCurrentPage] = useState(10);
  //proxima pagina
  const [offset, setOffset] = useState("");
  //evita chamar de imediato
  const [canObserver, setCanbserver] = useState(false);
  //alerta o fim da pagina
  const [listEnd, setListEnd] = useState(false);

  function convertForHour(dataRaw) {
    //converte para hora e minuto
    let newDate = new Intl.DateTimeFormat("pt-BR", {
      hour: "numeric",
      minute: "numeric",
    }).format(dataRaw);

    return newDate;
  }
  function convertForDay(dataRaw) {
    //converte para dia e mês

    let newDate = new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
    }).format(dataRaw);
    return newDate;
  }

  useEffect(() => {
    //primeira requesição quando entra no site
    try {
      setCanbserver(true);
      fetch(
        //fazendo uma requesição na api da airtable
        "https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas?filterByFormula=" +
          encodeURI("({Squad}='08-22')") +
          "&filterByFormula" +
          encodeURI(" NOT({Squad} = '') ") +
          `&pageSize=${currentPage}&&sort` +
          encodeURI("[0][field]=Data") +
          "&sort" +
          encodeURI("[0][direction]=desc"),

        {
          headers: {
            Authorization: `Bearer keyz8BAZKCTGY5dB1`,
            "Content-type": "application/json",
          },
        }
      )
        .then((dataRaw) => dataRaw.json())

        .then(
          (
            dataJson //está setando hashtag e offest
          ) => setHashtagData(dataJson.records) & setOffset(dataJson.offset)
        );
    } catch (erro) {
      console.log(erro);
    } finally {
      console.log("fetch terminado");
    }
    /*Toda vez que o SENTINELA estiver visivel  mudará o currentPage acrescentando mais 10 de buscas na api */
  }, [currentPage]);

  useEffect(() => {
    if (canObserver) {
      //caso não retorne o offset informando que não possui mais paginas
      if (!!offset) {
        // o interserctionObserver observa um elemento se está visivel ou não
        const interserctionObserver = new IntersectionObserver((entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            //execua 3s depois do SENTINELA for visivel
            setTimeout(() => {
              setCurrentPage((atual) => atual + 10);
            }, 3000);
            setCanbserver(false);
          }
        });
        // ele está observando a li com o ID SENTINELA
        interserctionObserver.observe(document.querySelector("#sentinela"));
        return () => interserctionObserver.disconnect();
      } else {
        console.log("fim");
        //informa o fim da lista quando o offset voltar undefined
        setListEnd(true);
      }
    }
  }, [offset]);

  // useEffect(() => {
  //   const observadorMap = new IntersectionObserver(
  //     (entries) => {
  //       // console.log("🚀 ~ file: index.jsx ~ line 110 ~ observadorMap ~ entries", entries)
  //       entries.forEach((item) => {
  //         console.log(item.target.children);
  //       });
  //     },
  //     {
  //       root: document.getElementById("map"),
  //     }
  //   );

  //   observadorMap.observe(document.getElementById("map"));
  // }, [hashtagData.length]);

  /* como o scroll infinito pode ser pesado por diversas divs o codigo abaixo tenta resolver esse 
  quesito */
  useEffect(() => {
    /* das diversas vezes que fiz o codigo o intersectionObserver precisaria de um elemento do dom estatico
    como é um fetch ele não consegui observar*/

    /*eu seleciono todos os componentes que tiverem o atributo DATA-ITEM que é um booleano e os transformo em array
     */
    const listArray = Array.from(document.querySelectorAll("[data-item]"));

    /* para usar o interSectionObserver preciso que eles já estão renderizados por isso esse if */
    if (!!listArray.length && listArray.length >= 1) {
      /* quando iniciado a pagina o interSectionObserver já procura o que observer já ó executando esse if
       só é ativado depois da primeira requesição */
      if (canObserver) {
        const observerT = new IntersectionObserver(
          (entries, t) => {
            console.log(entries, t);
            entries.forEach((item) => {
              if (!item.isIntersecting & (item.intersectionRatio == 0)) {
                item.target.setAttribute("data-item", "false");
              } else {
                item.target.setAttribute("data-item", "true");
              }
            });
          },
          {
            /* o root seria como width:100% e height:100vh de toda a janela da pagina, mas estou colocando  ocontainer__list
            como referencia do interSectionObserver que ele deve me dizer se os elementos estão visiveis ou não dentro da ul que está dentro do container__list que tem como id MAP*/
            root: document.getElementById("map"),
            threshold: [0, 0.01, 0.5, 1],
            rootMargin: " 10px 20px -30px 40px", //" 10px 20px 30px 40px"
          }
        );

        listArray.forEach(
          /*aqui estou dizendo para o interSectionObserver observar cada um das divs*/
          (item) => observerT.observe(item)
        );
      } else {
        null;
      }
    } else {
      null;
    }
  }, [hashtagData.length]);

  return (
    <>
      <HeadSeo
        title={"Historico"}
        description={"Suas buscas recentes aparecerão aqui"}
      />

      {/* <HeadTitle title={"Historico"} /> */}
      <div className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.container__title}>Buscas realizadas</h1>
          <div className={styles.container__table}>
            <div className={styles.container__table__header}>
              <span>Hashtag</span>
              <div>
                <span>Data</span>
                <span>Hora</span>
              </div>
            </div>
          </div>
          <div id="map" className={styles.container__list}>
            {/* renderiza de forma condicional se tiver hastag ou não */}
            <ul>
              {hashtagData.length >= 1 ? (
                hashtagData.map((item, index) => {
                  return (
                    <ListHastag
                      key={`ListHastag-${item.id}-${item.fields.Hashtag}-${index}`}
                      hour={convertForHour(item.fields.Data)}
                      date={convertForDay(item.fields.Data)}
                      hashtag={`#${item.fields.Hashtag}`}
                    />
                  );
                })
              ) : (
                <p>Suas pesquisas aparecerão aqui!!</p>
              )}

              {/*toda vez que o SENTINELA É VISIVEL acontence uma nova requesição*/}
              <li id="sentinela">
                {/*se true informa o fim da lista*/}

                {listEnd
                  ? "Parece que você chegou ao fim"
                  : hashtagData.length >= 1
                  ? "Carregando....."
                  : null}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
