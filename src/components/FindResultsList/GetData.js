import { useEffect, useState } from "react";

const GetData = (props) => {
  console.log(props.searchResults);
  /*
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
*/

  //let fetchUrls = [];
  //.items.map((item) => fetchUrls.push(item.url));
  /*
  //handleFetchUrl = () => {
  useEffect(() => {
    fetch(props.fetchUrl, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then(
        (data) => {
          setItems(data);
          setIsLoaded(true);
        },
        // Note: it's important to handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  /*
    if (error) {
      return error.message;
    } else if (!isLoaded) {
      return "Not loaded yet";
    } else {
      return items;
    }*/

  //props.onFetchedUrl(items);
  //};
  return <div>Test</div>;
};

export default GetData;
