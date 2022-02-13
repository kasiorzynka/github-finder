//import TextField from "@mui/material/TextField";
//import Navbar from "./components/Navbar/Navbar";
import Logo from "./components/Icons/Logo";
import { BsPersonCircle } from "react-icons/bs";
import RepoIcon from "./components/Icons/RepoIcon";
import StarIcon from "./components/Icons/StarIcon";
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

        <div className="main-container">
          <div className="wrapper">
            <header>
              <h1 className="results-counter">2,383 results</h1>
              <div className="results-container">
                <div>
                  <hr className="results-sep" />
                  <div className="results-repo">
                    <div className="results-icon-link">
                      <RepoIcon id="repo-icon" />
                      <a
                        className="result-link"
                        href="https://github.com/fockeRR/michalueu-examples"
                      >
                        fockeRR/michalueu-examples
                      </a>
                    </div>
                    <p className="result-nick-label">
                      Here you find sources for my tutorials on
                    </p>
                    <div className="repo-desc">
                      <a className="stars-number" href="#">
                        <StarIcon />9
                      </a>
                      <span className="repo-lang">
                        <span
                          className="repo-lang-color"
                          style={{ backgroundColor: "#ab7b3f" }}
                        ></span>
                        <span className="repo-lang-name">Java</span>
                        <span className="repo-update-licence">
                          Updated on 22 Aug 2016
                        </span>
                        <span className="repo-update-licence">MIT license</span>
                      </span>
                    </div>
                  </div>

                  <hr className="results-sep" />
                  <div className="results-user">
                    <div className="results-icon-link">
                      <BsPersonCircle className="avatar-img-sm" />
                      <a
                        className="result-link"
                        href="https://github.com/MichalPaszkiewicz"
                      >
                        Michal Paszkiewicz
                      </a>
                    </div>
                    <p className="result-nick-label">MichalPaszkiewicz</p>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
