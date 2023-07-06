import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import Drawer from './components/Drawer';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoriteResponse, itemsResponse] =
          await Promise.all([
            axios.get('https://649db0459bac4a8e669e2933.mockapi.io/cart'),
            axios.get('https://649db0459bac4a8e669e2933.mockapi.io/favorite'),
            axios.get('https://649db0459bac4a8e669e2933.mockapi.io/items'),
          ]);

        setCartItems(cartResponse.data);
        setFavoriteItems(favoriteResponse.data);
        setItems(itemsResponse.data);
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

  const onRemoveItemCart = (obj) => {
    try {
      axios.delete(
        `https://649db0459bac4a8e669e2933.mockapi.io/cart/${obj.id}`
      );
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } catch (err) {
      alert('Ошибка при удалении товара из корзины');
      console.error(err);
    }
  };

  const onAddToFavorite = async (item) => {
    try {
      if (favoriteItems.find((obj) => obj.id === item.id)) {
        axios.delete(
          `https://649db0459bac4a8e669e2933.mockapi.io/favorite/${item.id}`
        );
        setFavoriteItems((prev) =>
          prev.filter((obj) => Number(obj.id) !== Number(item.id))
        );
      } else {
        const { data } = await axios.post(
          'https://649db0459bac4a8e669e2933.mockapi.io/favorite',
          item
        );
        setFavoriteItems((prev) => [...prev, data]);
      }
    } catch (err) {
      alert('Ошибка при добавлении в закладки');
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
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
          exact
        />
        <Route
          path="/favorites"
          element={<Favorites items={favoriteItems} />}
          exact
        />
        <Route path="/orders" element={<Orders />} exact />
      </Routes>
    </div>
  );
}

export default App;
