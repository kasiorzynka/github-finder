import RepoLanguagesGetData from "./RepoLanguagesGetData";
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
        <p className="results-label">
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
            <span className="repo-license">MIT license</span>
          </span>
        </div>
      </div>
    </>
  );

  return (
    <>
      {dummyContent}
      {props.repos.items?.map((item) => (
        <>
          <hr className="results-sep" />
          <div className="results-repo">
            <div className="results-icon-link">
              <RepoIcon id="repo-icon" />
              {item.html_url && (
                <a className="results-link" href={item.html_url}>
                  {item.full_name}
                </a>
              )}
            </div>
            {item.description && (
              <p className="results-label">{item.description}</p>
            )}
            <div className="repo-desc">
              {item.stargazers_count && item.stargazers_url && (
                <a className="stars-number" href={item.stargazers_url}>
                  <StarIcon />
                  {item.stargazers_count}
                </a>
              )}
              {item.languages_url && (
                <span className="repo-lang">
                  <span
                    className="repo-lang-color"
                    style={{ backgroundColor: "#ab7b3f" }}
                  ></span>
                  <span className="repo-lang-name">
                    <RepoLanguagesGetData langurl={item.languages_url} />
                  </span>
                </span>
              )}
              {item.updated_at && (
                <span className="repo-update">
                  Updated on {item.updated_at}
                </span>
              )}
              {item.license && (
                <span className="repo-license">{item.license.name}</span>
              )}
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default ResultsRepo;
/*
TODO tablica ze wszystkimi językami/
TODO item.languages_url zawsze zwraca url, więc trzeba najpierw pobrać język przez komponent i zależnie od wyniku generować ten span
 */
