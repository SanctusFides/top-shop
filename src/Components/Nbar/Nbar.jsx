import NavCSS from "./Nbar.module.css";
import cartSVG from "./cart.svg";
import { Link } from "react-router-dom";

export default function Nbar({ cart }) {
  const CATEGORY = {
    electronics: "electronics",
    jewelry: "jewelery",
    mens: "men's clothing",
    womens: "women's clothing"
  };

  // const location = {
  //   pathname: '/category',
  //   state: {result : "Test"}
  // }


  
  const cartCopy = [...cart];

  return (
    <nav className={NavCSS.bar}>
      <ul className={NavCSS.leftSide}>

        <li>
          <Link to={"/"} className="home">
            <button className={NavCSS.logo}>Home Button</button>
          </Link>
        </li>

        <li>
            <Link to={location}>Men&apos;s Clothes</Link>
        </li>

      </ul>

      <ul className="right-side">
        <li className={NavCSS.userButtons}>
          <button className={NavCSS.cart}>
            <img src={cartSVG} />
            {cartCopy.length}
          </button>
        </li>
      </ul>
    </nav>
  );
}
