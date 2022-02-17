import "./UserProfile.css";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const params = useParams();
  //const userData = <ResultsGetData findtype={"user"} q={params.login} />;
  //console.log(userData);

  return <div>User Profile: {params.login}</div>;
};

export default UserProfile;
