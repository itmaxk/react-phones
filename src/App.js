import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";

const arr = [
  { id: 1, name: 'Смартфон Samsung Galaxy A23 4 64GB персиковый (A235)', price: 19990, imgLink: '/img/phones/Смартфон Samsung Galaxy A23 4 64GB персиковый (A235).jpg' },
  { id: 2, name: 'Смартфон HONOR 50 6 128GB (изумрудно-зеленый)', price: 34990, imgLink: '/img/phones/Смартфон HONOR 50 6 128GB (изумрудно-зеленый).jpg' },
  { id: 3, name: 'Смартфон Apple iPhone 13 Pro Max 256GB небесно-голубой', price: 137990, imgLink: '/img/phones/Смартфон Apple iPhone 13 Pro Max 256GB небесно-голубой.jpg' },
  { id: 4, name: 'Смартфон Xiaomi 12 Lite 8 128GB (черный)', price: 38990, imgLink: '/img/phones/Смартфон Xiaomi 12 Lite 8 128GB (черный).jpg' },
];

function App() {
  return (
    <div className="wrapper clear">
      
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все телефоны</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">

          {arr.map((obj) => (
            <Card key={obj.id} name={obj.name} price={obj.price} imgLink={obj.imgLink} onClick={() => console.log(obj)}/>
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;
