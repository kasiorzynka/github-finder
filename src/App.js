//import TextField from "@mui/material/TextField";
//import Navbar from "./components/Navbar/Navbar";
import ResultsList from "./components/FindResultsList/ResultsList";
import Logo from "./components/Icons/Logo";
import { BsPersonCircle } from "react-icons/bs"; //placeholder for user image
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav-container">
          <div className="nav">
            <div className="wrapper">
              <Logo />
              <div className="search-container">
                <a href="#" className="search" type="text" placeholder="Search">
                  Search
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="main-container">
        <ResultsList />
      </div>
    </div>
  );
};

export default App;
