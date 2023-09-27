import useFetch from "react-fetch-hook";
import ItemCard from "../ItemCard/ItemCard";
import Nbar from "../Nbar/Nbar";
import StoreCSS from "./Store.module.css";

export default function Store({ cart, handleAddToCart }) {

  const { isLoading, data, error } = useFetch(
    "https://fakestoreapi.com/products?limit=18"
  );

  return (
    <>
      <Nbar cart={cart} />
      <div className={StoreCSS.homeBody}>
        <h1>BROWSE OUR WARES</h1>
        {isLoading && <div>Loading...</div>}
        {error && <div>{`There was an issue loading data - ${error}`}</div>}
        <ul className={StoreCSS.recommends}>
          {data &&
            data.map(({ id, title, price, image }) => (
              <li key={id} className={StoreCSS.card}>
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
    </>
  );
}
