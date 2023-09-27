import ItemCardCSS from "./ItemCard.module.css";

// eslint-disable-next-line react/prop-types
export default function ItemCard({ id, title, price, image, handleAddToCart }) {


  const item = { id: id, title: title, price: price, image: image};


  // NEED TO HANDLE PRICES THAT COME IN A TENS PLACE DECIMAL VALUE ONLY
  // SET LOGIC HERE TO CHECK IF PRICE HAS DECIMAL - IF SO, CHECK IF VALUE LENGTH AFTER DECIMAL == 1, IF SO MAKE IT .#0

  return (
    <div className={ItemCardCSS.cardBody}>
      <img src={image} className={ItemCardCSS.thumbnail} />
      <p> {title} </p>
      <div className={ItemCardCSS.cardBtns}>
        ${price}
        <button onClick={() => handleAddToCart(item)}>Add</button>
      </div>
    </div>
  );
}
