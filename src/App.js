import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import ResultsList from "./components/FindResultsList/ResultsList";
import UserProfile from "./components/UserProfile";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main className="main-container">
          <Routes>
            <Route path="/" element={<ResultsList />} />
            <Route path="/user/:login" element={<UserProfile />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
