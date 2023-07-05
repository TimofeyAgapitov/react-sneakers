import React from 'react';
import axios from 'axios';

import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get('https://649db0459bac4a8e669e2933.mockapi.io/items')
      .then((res) => setItems(res.data));
    axios
      .get('https://649db0459bac4a8e669e2933.mockapi.io/cart')
      .then((res) => setCartItems(res.data));

    async function fetchData() {
      try {
        const [itemsResponse, cartResponse] = await Promise.all([
          axios.get('https://649db0459bac4a8e669e2933.mockapi.io/items'),
          axios.get('https://649db0459bac4a8e669e2933.mockapi.io/cart'),
        ]);

        setItems(itemsResponse.data);
        setCartItems(cartResponse.data);
      } catch (err) {
        alert('Ошибка при загрузки с сервера');
        console.error(err);
      }
    }

    fetchData();
  }, []);

  const onAddToCart = (item) => {
    axios.post('https://649db0459bac4a8e669e2933.mockapi.io/cart', item);
    setCartItems((prev) => [...prev, item]);
  };

  const onRemoveItemCart = (itemId) => {
    try {
      axios.delete(
        `https://649db0459bac4a8e669e2933.mockapi.io/cart/${itemId}`
      );
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(itemId))
      );
    } catch (err) {
      alert('Ошибка при удалении товара из корзины');
      console.error(err);
    }
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemoveItem={onRemoveItemCart}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className=" d-flex align-center justify-between mb-40">
          <h1>
            {searchValue
              ? `Поиск по запросу :"${searchValue}"`
              : 'Все кроссовки'}
          </h1>
          <div className="search-block">
            <img src="/assets/img/search.svg" alt="search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue('')}
                className="clear cu-p"
                src="/assets/img/btn-remove.svg"
                alt=""
              />
            )}
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              placeholder="Поиск..."
            />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card key={index} item={item} onAdd={() => onAddToCart(item)} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
