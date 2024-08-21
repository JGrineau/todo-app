import "./Header.scss";
import { FaTasks } from "react-icons/fa";
import MainMenu from "../MainMenu/MainMenu";

function Header() {
  return (
    <div className="header-container">
    <header>
      
        
        <h1 className="title">
        <FaTasks />   Todo App
        </h1>
     

      <div className="author">by JP Grineau</div>
      
    </header>
    <MainMenu />
    </div>
  );
}

export default Header;
