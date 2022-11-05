import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

function Profile() {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);

  //fetch github profile
  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const response = await fetch("https://api.github.com/users/lhorla");
    const data = await response.json();
    setProfile(data);
    setLoading(false);
    console.log(data);
  };

  return (
    <div className="profile-container">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="profile-card">
            <div className="profile">
              <img src={profile.avatar_url} alt="profile" />
            </div>
            <div className="profile-details">
              <h1>{profile.name}</h1>
              <h3>{profile.login}</h3>
              <p>{profile.bio}</p>
              <div className="profile-links">
                <a href={profile.html_url} target="_blank" rel="noreferrer">
                  Github
                </a>
              </div>
              <Link to="/projects">
                <button>View Projects</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;
