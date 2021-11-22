import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./card.css";

export const Card = ({ profiles, filter }) => {
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);
  useEffect(() => {
    if (profiles.length) {
      if (filter !== "") {
        let profile = profiles.find((profile) => profile.name === filter);
        if (profile) setFilteredProfiles([profile]);
        else setFilteredProfiles([]);
      } else setFilteredProfiles(profiles);
    }
  }, [profiles, filter]);
  return filteredProfiles.length ? (
    <div className="grid">
      {filteredProfiles.map((profile) => (
        <Link to={`/${profile.id}`}>
          <div class="card">
            <img src={profile.Image} alt="Avatar" style={{ width: "100px" }} />
            <div class="container">
              <h4>
                <b>{profile.name}</b>
              </h4>
            </div>
          </div>
        </Link>
      ))}
    </div>
  ) : (
    <h2>No Profiles to display</h2>
  );
};
