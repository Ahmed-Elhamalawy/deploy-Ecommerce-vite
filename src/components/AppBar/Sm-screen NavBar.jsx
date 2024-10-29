import { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import Accordion from "./Accordion";
import Logoimg from "../../../src/images/logo_dark .png";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const SmScreenNavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const carts = useSelector((store) => store.cart.items);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  const [totalQuantity, setTotalQuantity] = useState(0);

  return (
    <nav className="lg:hidden w-full flex flex-col h-16 px-4 sm:px-4 z-30 relative">
      <div className="flex flex-row px-2  w-full h-16 items-center justify-between">
        <a className="place-content-start" href="#">
          <img src={Logoimg} alt="" className="w-25 h-10" />
        </a>
        <div className="flex gap-3 relative">
          <NavLink to={"/ShoppingCart"}>
            <CiShoppingCart className="text-xl h-full peer cursor-pointer" />
          </NavLink>
          <button onClick={toggleMenu}>
            <RxHamburgerMenu />
          </button>
          <span className="absolute -top-2 right-12 bg-red text-white rounded-full w-4 h-4 text-xs flex justify-center items-center">
            {totalQuantity}
          </span>
        </div>
      </div>
      <menu
        className={`${
          showMenu ? "block" : "hidden"
        } absolute top-16 left-0 w-full flex flex-col px-10 gap-3 transition-all`}
      >
        <Accordion isOpen={showMenu} />
      </menu>
    </nav>
  );
};

export default SmScreenNavBar;
