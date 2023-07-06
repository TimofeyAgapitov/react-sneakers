import React from 'react';
import Card from '../components/Card';

function Home({
  items,
  searchValue,
  setSearchValue,
  onAddToFavorite,
  onAddToCart,
}) {
  return (
    <div className="content p-40">
      <div className=" d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Поиск по запросу :"${searchValue}"` : 'Все кроссовки'}
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
            <Card
              key={index}
              item={item}
              onFavorite={() => onAddToFavorite(item)}
              onAdd={() => onAddToCart(item)}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
