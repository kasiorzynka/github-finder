import "./ResultsList.css";
import { BsPersonCircle } from "react-icons/bs";
import ResultsGetData from "./ResultsGetData";

const ResultsList = () => {
  let findType = "users";
  let findpath = "users";

  findType = "repos";
  findpath = "repositories";

  return (
    <div className="wrapper">
      <header>
        <h1 className="results-counter">2,383 results</h1>
        <div className="results-container">
          <ResultsGetData findtype={findType} findpath={findpath} />
        </div>
      </header>
    </div>
  );
};

export default ResultsList;

/* TODO change findpath for real path */
