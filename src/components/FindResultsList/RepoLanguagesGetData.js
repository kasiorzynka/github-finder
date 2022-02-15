import { useEffect, useState } from "react";

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const RepoLanguagesGetData = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(props.langurl, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
          setIsLoaded(true);
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
    let domainLangBites = 0;
    let domainLangName = "";
    for (let key in items) {
      if (items[key] > domainLangBites) {
        domainLangBites = items[key];
        domainLangName = key;
      }
    }

    return domainLangName;
  }
};

export default RepoLanguagesGetData;
