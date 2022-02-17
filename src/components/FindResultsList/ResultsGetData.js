import { useEffect, useState } from "react";
import UserProfile from "../UserProfile";
import GetData from "./GetData";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

//Multifetch na users i repositories, order by id inside items
const ResultsGetData = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  let fetchUrl = "";
  let fetchUrls = [];

  switch (props.findtype) {
    case "user":
      fetchUrl = GITHUB_URL + "users/" + props.q;
      break;
    case "reposAndUsers":
      fetchUrls = [
        GITHUB_URL + "search/users?q=" + props.q + "&per_page=4&page=1", //remove per page
        GITHUB_URL + "search/repositories?q=" + props.q + "&per_page=4&page=1",
      ];
      break;
  }
  console.log(fetchUrls);
  //`search/users?q=katarzyna&order=desc&per_page=4&page=1`
  //fetch(`https://api.github.com/search/repositories?q=postman&order=desc&per_page=4&page=1`,{
  // Note: the empty deps array [] means this useEffect will run once similar to componentDidMount()
  //useLayoutEffect
  //fetch(`${GITHUB_URL}${props.findpath}`, {
  //const fetch = require("node-fetch");

  useEffect(() => {
    if (props.findtype === "reposAndUsers") {
      Promise.all(
        //renders twice
        fetchUrls.map((url) =>
          fetch(url, {
            headers: {
              Authorization: `token ${GITHUB_TOKEN}`,
            },
          })
            .then((response) => response.json())
            .then((data) => {
              //setItems([].concat(...data));
              setItems({ ...data });
              setIsLoaded(true);
            })
        )
      );
    } else {
      fetch(fetchUrl, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      })
        .then((response) => response.json())
        .then(
          (data) => {
            setItems(data);
            setIsLoaded(true);
            //console.log(data);
          },
          // Note: it's important to handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    if (props.findtype === "user") {
      return <UserProfile user={items} />;
    } else {
      return <GetData searchResults={items} />;
    }
  }
};

export default ResultsGetData;
