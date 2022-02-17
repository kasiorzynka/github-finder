import ResultsGetData from "./ResultsGetData";
import "./ResultsList.css";

const ResultsList = () => {
  let findType = "reposAndUsers";
  //let findType = "user";
  //let search = "katarzyna";
  //let search = "sealionkat";
  let search = "katarzyna";
  //<ResultsGetData findtype="all" />

  return (
    <div className="wrapper">
      <header>
        <h1 className="results-counter">2,383 results</h1>
        <div className="results-container">
          <ResultsGetData findtype={findType} q={search} />
        </div>
      </header>
    </div>
  );
};

export default ResultsList;

/* TODO change findpath for real path */
