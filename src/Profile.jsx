import { Outlet, useParams } from "react-router";
import Shiba from "./Shiba";
import Husky from "./Husky";
import DefaultProfile from "./DefaultProfile";

const Profile = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello from profile page</h1>
      <p>How are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {name === "shiba" ? (
        <Shiba />
      ) : name === "husky" ? (
        <Husky />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
};

export default Profile;
