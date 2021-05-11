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
        <div>
          <textarea
            value={followUserName}
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
