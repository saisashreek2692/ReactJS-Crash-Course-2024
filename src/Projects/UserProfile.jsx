import UserContext from "../Context/UserContext";
import React, { useContext } from "react";

function UserProfile() {
  const { user } = useContext(UserContext);

  if (!user) return <h1>Not Logged In</h1>;

  return (
    <div>
      UserProfile: {user.userName}
      <h1>More Components</h1>
    </div>
  );
}

export default UserProfile;
