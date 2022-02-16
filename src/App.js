import Navbar from "./components/Layout/Navbar";
import ResultsList from "./components/FindResultsList/ResultsList";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <ResultsList />
      </div>
    </div>
  );
};

export default App;
