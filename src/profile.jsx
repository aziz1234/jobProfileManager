import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./profile.css";

export default function ({ profiles, handleShortlist, handleReject }) {
  const [profile, setProfile] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    if (profiles.length) {
      let newProfile = profiles.find((profile) => profile.id === id);
      setProfile(newProfile);
    }
  }, [profiles]);

  const onShortlist = () => {
    handleShortlist(profile);
  };

  const onReject = () => {
    handleReject(profile);
  };

  return profile ? (
    <div className="profile-grid">
      <div>
        <img src={profile.Image} alt="Avatar" />
      </div>
      <div class="container">
        <h4>
          <b>{profile.name}</b>
        </h4>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          tincidunt, mauris sit amet sagittis scelerisque, erat sapien vulputate
          dui, laoreet efficitur mi ex quis elit. Nulla dictum finibus interdum.
          Fusce viverra, sem nec placerat sodales, augue turpis interdum neque,
          egestas fermentum ipsum felis ut sapien. Integer ex urna, vestibulum
          sed neque porttitor, fermentum tempus odio. Aenean porttitor elementum
          tellus, sit amet facilisis elit posuere vel. Ut at orci ut orci
          rhoncus hendrerit quis in nunc. Ut dapibus dui ipsum, bibendum pretium
          libero mollis nec. Donec sit amet euismod nisl, vitae tincidunt odio.
        </div>
        <button onClick={() => onReject()} className="reject">
          Reject
        </button>
        <button onClick={() => onShortlist()} className="shortlist">
          Shortlist
        </button>
      </div>
    </div>
  ) : null;
}
