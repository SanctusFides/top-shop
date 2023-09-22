import ItemCard from "../ItemCard/ItemCard";
import HomeCSS from "./HomePage.module.css";
import useFetch from "react-fetch-hook";

export default function HomePage({ handleAddToCart }) {
  const { isLoading, data, error } = useFetch(
    "https://fakestoreapi.com/products?limit=5"
  );

  return (
    <div className={HomeCSS.homeBody}>
      <h1>BROWSE OUR WARES</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>{`There was an issue loading data - ${error}`}</div>}
      <ul className={HomeCSS.recommends}>
        {data &&
          data.map(({ id, title, price, image }) => (
            <li key={id}>
              <ItemCard
                id={id}
                title={title}
                price={price}
                image={image}
                handleAddToCart={handleAddToCart}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
