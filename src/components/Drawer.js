function Drawer(props) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          <div>Корзина</div>
          <div>
            <button onClick={props.onClose} className="cartClose">Закрыть</button>
          </div>
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div>
              <img
                className="mr-15 cartItemImg"
                src="/img/phones/1.jpg"
                alt="Phone"
              />
              <div style={{}} className="mr-10">
                <p className="mb-5">
                  Смартфон Samsung Galaxy A23 4/64GB персиковый (A235)
                </p>
                <b>19 990 руб.</b>
              </div>
              <div className="mt-15 d-flex align-center">
                <button className="cartItemDelete pr-30">Удалить</button>
              </div>
            </div>
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div>
              <img
                className="mr-15 cartItemImg"
                src="/img/phones/1.jpg"
                alt="Phone"
              />
              <div style={{}} className="mr-10">
                <p className="mb-5">
                  Смартфон Samsung Galaxy A23 4/64GB персиковый (A235)
                </p>
                <b>19 990 руб.</b>
              </div>
              <div className="mt-15 d-flex align-center">
                <button className="cartItemDelete">Удалить</button>
              </div>
            </div>
          </div>
        </div>

        <div className="cartTotalBlock">
          <ul className="cartTotalBlock">
            <li className="d-flex">
              <span>Итого:</span>
              <div></div>
              <b>21 000 руб.</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%:</span>
              <div></div>
              <b>1 000 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
