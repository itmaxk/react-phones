import React from "react";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";

function App() {

  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://6358d235c27556d289446b05.mockapi.io/items').then(res => {
      return res.json();
    }).then(json => {
      setItems(json);
    });
  }, [])

  return (
    <div className="wrapper clear">
      
      { cartOpened && <Drawer onClose={() => setCartOpened(false)}/>  }
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все телефоны</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">

          {items.map((obj) => (
            <Card 
              key={obj.id} 
              name={obj.name} 
              price={obj.price} 
              imgLink={obj.imgLink} 
              addToFavorite={() => console.log('Добавили в закладки')}
              addToCart={() => console.log('Добавили в корзину')}/>
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;
