function App() {
  return (
    <div className="wrapper clear">
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
        <h1 className="mb-40">Все телефоны</h1>
        
        <div className="d-flex">
          <div className="card">
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
