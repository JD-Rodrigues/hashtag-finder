import React, { useState} from "react";
import { ListHastag } from "../../components/listHastag/ListHastag";
import styles from "./history.module.css";

export const History = () => {
  const [data, setData] = useState({
    has: "#javascript",
    data: "02/09",
    hora: "9:30",
  });

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.container__title}>Buscas realizadas</h1>
        <div className={styles.container__table}>
          <div className={styles.container__table__header}>
            <span>HashTag</span>
            <div>
              <span>Data</span>
              <span>Hora</span>
            </div>
          </div>
        </div>
        <div className={styles.container__list}>
          <ul>
            <ListHastag hashtag={data.has} date={data.data} hour={data.hora} />
          </ul>
        </div>
      </div>
    </>
  );
};
