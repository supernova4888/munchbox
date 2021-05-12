import React from "react";

export default function NewFollowerForm({ onSubmit }) {
  const [followUserName, setFollowUserName]= React.useState("");

  const handleSubmit = () => {
    onSubmit({
      followUserName: followUserName,
    });

    // Clear the input field
    setFollowUserName("");
  };


  

  return (
    <form>
      <div>
        <h3>Enter the user name to follow</h3>
        <div>
          <input
            type= "text" value={followUserName}
            onChange={(e) => setFollowUserName(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button className="buttonRegister" type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
}
