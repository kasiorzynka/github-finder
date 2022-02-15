import { useEffect, useState } from "react";
import ResultsRepo from "./ResultsRepo";
import ResultsUser from "./ResultsUser";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const ResultsGetData = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means this useEffect will run once similar to componentDidMount()
  useEffect(() => {
    fetch(`${GITHUB_URL}${props.findpath}?q=postman&page=2&per_page=5`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    }) //?page=20&per_page=5
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    switch (props.findtype) {
      case "users":
        return <ResultsUser users={items} />;
      case "repos":
        return <ResultsRepo repos={items} />;
      default:
        return "Empty component";
    }
  }
};

export default ResultsGetData;
