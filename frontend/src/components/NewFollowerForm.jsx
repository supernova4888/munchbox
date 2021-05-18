import React from "react";

export default function NewFollowerForm({ onSubmit }) {
  const [followUserName, setFollowUserName]= React.useState("");
  const handleSubmit = () => {
    onSubmit({
      followUserName: followUserName,
    });
    setFollowUserName("");
  };
  return (
    <form>
      <div>
          <input className="selectProfile"
            type= "text" value={followUserName} placeholder = "Enter user name"
            onChange={(e) => setFollowUserName(e.target.value)}
          />
          <button className="buttonSubmit" type="button" onClick={handleSubmit}>
          Follow
        </button>
      </div>
    </form>
  );
}
