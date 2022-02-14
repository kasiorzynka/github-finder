import { useState, useEffect } from "react";
import "./ResultsUser.css";
import { BsPersonCircle } from "react-icons/bs";

const ResultsUser = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  //User layout example
  const dummyContent = (
    <>
      <hr className="results-sep" />
      <div className="results-user">
        <div className="results-icon-link">
          <BsPersonCircle className="avatar-img-sm" />
          <a
            className="results-link"
            href="https://github.com/MichalPaszkiewicz"
          >
            Michal Paszkiewicz
          </a>
        </div>
        <p className="results-nick-label">MichalPaszkiewicz</p>
        <p className="user-desc">
          Just a guy who likes to make things @MichalYouDoing
        </p>
        <p className="user-location">London, England</p>
      </div>
    </>
  );

  // Note: the empty deps array [] means this useEffect will run once similar to componentDidMount()
  useEffect(() => {
    fetch("https://api.github.com/users")
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
    return (
      <>
        {dummyContent}
        {items.map((item) => (
          <>
            <hr className="results-sep" />

            <div className="results-user">
              <div className="results-icon-link">
                <BsPersonCircle className="avatar-img-sm" />
                <a className="results-link" href={item.html_url}>
                  {item.name} {item.avatar_url}
                </a>
              </div>
              <p className="results-nick-label">{item.login}</p>
              {item.bio && (
                <p className="user-desc">
                  Just a guy who likes to make things @MichalYouDoing
                </p>
              )}

              <p className="user-location">London, England</p>
            </div>
          </>
        ))}
      </>
    );
  }
};

export default ResultsUser;
