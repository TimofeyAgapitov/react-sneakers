import React from 'react';
import styles from './Card.module.scss';

const Card = ({ item, onFavorite, onAdd, isFavorited = false }) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(isFavorited);

  const handleAddToCart = () => {
    onAdd(item);
    setIsAdded(!isAdded);
  };

  const handleAddToFavorite = () => {
    onFavorite(item);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          onClick={handleAddToFavorite}
          src={isFavorite ? '/assets/img/liked.svg' : '/assets/img/unliked.svg'}
          alt="Избранное"
        />
      </div>
      <img width={133} height={112} src={item.imageUrl} alt="Кросссовки 1" />
      <h5>{item.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена</span>
          <b>{item.price} руб.</b>
        </div>
        <img
          className={styles.add}
          onClick={handleAddToCart}
          src={
            isAdded ? '/assets/img/btn-checked.svg' : '/assets/img/btn-plus.svg'
          }
          alt="Добавить товар"
        />
      </div>
    </div>
  );
};

export default Card;
