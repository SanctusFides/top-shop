import ItemCardCSS from "./ItemCard.module.css";

// eslint-disable-next-line react/prop-types
export default function ItemCard({ title, price, image }) {
  if (title.length > 55) {
    title = `${title.slice(0, 60)}...`;
  }

  return (
    <div className={ItemCardCSS.cardBody}>
      <img src={image} className={ItemCardCSS.thumbnail} />
      <p> {title} </p>${price}
      <button>Add</button>
    </div>
  );
}
