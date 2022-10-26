function Header(props) {

  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img className="logo" src="/img/logo.png" alt="logo" />
        <div className="headerInfo">
          <h3 className="text-uppercase">React Phones</h3>
          <p className="opacity-5">Магазин лучших телефонов</p>
        </div>
      </div>

      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img className="cart" src="/img/cart.svg" alt="cart" />
          <span>1205 руб.</span>
        </li>

        <li>
          <img className="user" src="/img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
