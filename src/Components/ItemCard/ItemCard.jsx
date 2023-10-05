import ItemCardCSS from "./ItemCard.module.css";

// eslint-disable-next-line react/prop-types
export default function ItemCard({ id, title, price, image, handleAddToCart }) {


  const item = { id: id, title: title, price: price, image: image};

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  return (
    <div className={ItemCardCSS.cardBody}>
      <img src={image} className={ItemCardCSS.thumbnail} />
      <p> {title} </p>
      <div className={ItemCardCSS.cardBtns}>
        {formatter.format(price)}
        <button onClick={() => handleAddToCart(item)}>Add</button>
      </div>
    </div>
  );
}
