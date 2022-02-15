import "./ResultsUser.css";
import { BsPersonCircle } from "react-icons/bs";

const ResultsUser = (props) => {
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

  return (
    <>
      {dummyContent}
      {props.users.map((item) => (
        <>
          <hr className="results-sep" />

          <div className="results-user">
            <div className="results-icon-link">
              {
                item.avatar_url ? (
                  <img
                    className="avatar-img-sm"
                    src={
                      item.avatar_url + "&s=40"
                    } /*Minimalize image before render on page*/
                    alt="User avatar image"
                  />
                ) : (
                  <BsPersonCircle className="avatar-img-sm" />
                )
                /*Placeholder*/
              }
              {item.name && (
                <a className="results-link" href={item.html_url}>
                  {item.name}
                </a>
              )}
            </div>
            {/*Required input*/}
            <p className="results-nick-label">{item.login}</p>
            {item.bio && <p className="user-desc">{item.bio}</p>}
            {item.location && <p className="user-location">{item.location}</p>}
          </div>
        </>
      ))}
    </>
  );
};

export default ResultsUser;
