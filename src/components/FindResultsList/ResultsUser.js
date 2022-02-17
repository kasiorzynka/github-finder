import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import "./ResultsUser.css";
import GetData from "./GetData";

const ResultsUser = (props) => {
  const fetchUrls = props.fetchUrls;
  //console.log(user);
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
        <p className="results-nick">MichalPaszkiewicz</p>
        <p className="user-desc">
          Just a guy who likes to make things @MichalYouDoing
        </p>
        <p className="user-location">London, England</p>
      </div>
    </>
  );
  /*
  for (let key in user) {
    console.log(key);
  }
*/
  let user = "";
  fetchUrls.map((fetchUrl) => {
    user = <GetData onFetchedUrl={fetchUrl} />;
    return (
      <>
        {dummyContent}
        <>
          <hr className="results-sep" />

          <div className="results-user">
            <div className="results-icon-link">
              {user.avatar_url ? (
                <Link to={`user/${user.login}`}>
                  <img
                    className="avatar-img-sm"
                    src={
                      user.avatar_url + "&s=40"
                    } /*Minimalize image before render on page*/
                    alt="User avatar image"
                  />
                </Link>
              ) : (
                /*Placeholder*/
                <Link to={`user/${user.login}`}>
                  <BsPersonCircle className="avatar-img-sm" />
                </Link>
              )}
              {user.name && (
                <Link className="results-link" to={`user/${user.login}`}>
                  {user.name}
                </Link>
              )}
            </div>
            <Link className="results-nick" to={`user/${user.login}`}>
              {user.login}
            </Link>
            {user.bio && <p className="user-desc">{user.bio}</p>}
            {user.location && <p className="user-location">{user.location}</p>}
          </div>
        </>
      </>
    );
  });

  /*
  if (error) {
    console.log(error);
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    console.log("Not loaded yet");
    return <div>Loading...</div>;
  } else {
    console.log(items);
    console.log(fetchUrls[1]);
  }*/
  //{props.users.items?.map((item) => (
};

export default ResultsUser;
