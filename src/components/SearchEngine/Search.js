import "./Search.css";
import ResultsList from "../FindResultsList/ResultsList";
import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState();

  return (
    <div className="search-container">
      <a href="#" className="search" type="text" placeholder="Search">
        Search
      </a>
      <input
        type="text"
        //value={"search"}
        //onChange={alert("changed")} //{setSearch((e) => setSearch(e.target.value))} //onChange={ e => setSearch(e.target.value) ? <ResultsList search={setSearch((e) => setSearch(e.target.value))} />
      />
    </div>
  );
};

export default Search;
