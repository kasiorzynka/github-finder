//import RepoLanguagesGetData from "./RepoLanguagesGetData";
import RepoIcon from "../Icons/RepoIcon";
import StarIcon from "../Icons/StarIcon";
import "./ResultsRepo.css";

const ResultsRepo = (props) => {
  //console.log(props.findtype);
  const dummyContent = (
    <>
      <hr className="results-sep" />
      <div className="results-repo">
        <div className="results-icon-link">
          <RepoIcon id="repo-icon" />
          <a
            className="results-link"
            href="https://github.com/fockeRR/michalueu-examples"
          >
            fockeRR/michalueu-examples
          </a>
        </div>
        <p className="results-nick-label">
          Here you find sources for my tutorials on
        </p>
        <div className="repo-desc">
          <a className="stars-number" href="#">
            <StarIcon />9
          </a>
          <span className="repo-lang">
            <span
              className="repo-lang-color"
              style={{ backgroundColor: "#ab7b3f" }}
            ></span>
            <span className="repo-lang-name">Java</span>
            <span className="repo-update">Updated on 22 Aug 2016</span>
            <span className="repo-licence">MIT license</span>
          </span>
        </div>
      </div>
    </>
  );

  return (
    <>
      {dummyContent}
      {props.repos.map((item) => (
        <>
          <hr className="results-sep" />
          <div className="results-repo">
            <div className="results-icon-link">
              <RepoIcon id="repo-icon" />
              <a className="results-link" href={item.html_url}>
                {item.full_name}
              </a>
            </div>
            <p className="results-nick-label">{item.description}</p>
            <div className="repo-desc">
              <a className="stars-number" href={item.stargazers_url}>
                <StarIcon />
                {item.stargazers_url.length}
              </a>
              <span className="repo-lang">
                <span
                  className="repo-lang-color"
                  style={{ backgroundColor: "#ab7b3f" }}
                ></span>
                <span className="repo-lang-name">
                  {/*<RepoLanguagesGetData langurl={item.languages_url} />*/}
                </span>
                {/*tablica ze wszystkimi językami/*/}
                <span className="repo-update">Updated on 22 Aug 2016</span>
                <span className="repo-licence">{item.license}</span>
              </span>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default ResultsRepo;
