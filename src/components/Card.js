function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img className="phone" src="/img/phones/1.jpg" alt="Phone" />
      <h5>Смартфон Samsung Galaxy A23 4/64GB персиковый (A235)</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>19 990 руб.</b>
        </div>
        <button className="button">
          <img src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;