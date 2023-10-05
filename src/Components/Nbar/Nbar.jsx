import NavCSS from "./Nbar.module.css";
import cartSVG from "./cart.svg";
import { Link } from "react-router-dom";

export default function Nbar({cart}) {

  let cartQuantityTotal = 0
  cart.forEach(item => {
    cartQuantityTotal += item.quantity
  });
  
  return (
    <nav className={NavCSS.bar}>
      <ul className={NavCSS.leftSide}>

        <li>
          <Link to={"/"} className="home">
            <button className={NavCSS.logo}>Home Button</button>
          </Link>
        </li>

        <li>
          <Link to={"/store"} cart={cart}>
            <button className={NavCSS.link}>Shop</button>
          </Link>
        </li>

      </ul>

      <ul className="right-side">
        <li className={NavCSS.userButtons}>
          <Link to={"/checkout"} cart={cart}>
            <button className={NavCSS.cart}>
              <img src={cartSVG} />
              {cartQuantityTotal}
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
