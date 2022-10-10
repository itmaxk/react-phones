function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="mb-30 d-flex justify-between">
            <div>Корзина</div>
            <div>
              <button className="cartClose">Закрыть</button>
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

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img className="logo" src="/img/logo.png" alt="logo" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Phones</h3>
            <p className="opacity-5">Магазин лучших телефонов</p>
          </div>
        </div>

        <ul className="d-flex">
          <li className="mr-30">
            <img className="cart" src="/img/cart.svg" alt="cart" />
            <span>1205 руб.</span>
          </li>

          <li>
            <img className="user" src="/img/user.svg" alt="user" />
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все телефоны</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
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

          <div className="card">
            <img className="phone" src="/img/phones/2.jpg" alt="Phone" />
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

          <div className="card">
            <img className="phone" src="/img/phones/3.jpg" alt="Phone" />
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

          <div className="card">
            <img className="phone" src="/img/phones/4.jpg" alt="Phone" />
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
        </div>
      </div>
    </div>
  );
}

export default App;
