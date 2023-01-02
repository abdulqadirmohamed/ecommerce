import { useContext } from "react";
import { Link } from "react-router-dom";
// import {CartContext} from '../context/CounterContext'
import { CartContext } from "../context/CounterContext";


const Header = () => {
  const {items} = useContext(CartContext)
 
  return (
    <div>
      <div className="w-[75%] mx-auto flex justify-between py-4 items-center">
        {/* Logo */}
        <div>
          <Link to="/" className="text-2xl text-[#F9543F] font-semibold">Carlox</Link>
        </div>
        {/* Nav */}
        <nav className="flex gap-4 text-lg">
          <Link to="/">Home</Link>
          <a href="#">Menu</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        {/* Login */}
        <div className="flex gap-4 items-center">
          <Link
           to='/checkout'
            className="text-[#EEF6F3] px-4 py-2 rounded-md bg-[#F9543F]  hover:bg-[#ff4b33] "
          >
            Cart {items.length}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
