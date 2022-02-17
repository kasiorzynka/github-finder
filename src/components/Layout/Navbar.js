import { Link } from "react-router-dom";
import Search from "../SearchEngine/Search";
import Logo from "../Icons/Logo";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header className="App-header">
        <div className="nav-container">
          <div className="nav">
            <div className="wrapper">
              <Link to={"/"}>
                <Logo />
              </Link>
              <Search />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
