import React from "react";
import { Card } from "./card";

export default function Shortlisted({ profiles, filter }) {
  return profiles.length ? (
    // (
    //   <div className="grid">
    //     {profiles.map((profile) => (
    //       <div class="card">
    //         <img src={profile.Image} alt="Avatar" style={{ width: "100px" }} />
    //         <div class="container">
    //           <h4>
    //             <b>{profile.name}</b>
    //           </h4>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // )
    <Card profiles={profiles} filter={filter} />
  ) : null;
}
