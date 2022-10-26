import React from "react";
import styles from "./Card.module.scss";

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickAddPhone = () => {
    setIsAdded(!isAdded);
  };

  console.log(isAdded);

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          src="/img/heart-unliked.svg"
          alt="Unliked"
          onClick={props.addToFavorite}
        />
      </div>
      <img className={styles.phone} src={props.imgLink} alt="Phone" />
      <h5>{props.name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price}</b>
        </div>
        <img
          className={styles.addPhone}
          onClick={onClickAddPhone}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
