import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./home.css";

export default function ({ handleFilter }) {
  const [currentTab, setCurrentTab] = useState("home");
  const [text, setText] = useState("");
  const { route } = useLocation();
  const { id } = useParams();

  useEffect(() => {
    if (route === "") setCurrentTab("home");
    else if (document.location.toString().includes("rejected"))
      setCurrentTab("rejected");
    else if (document.location.toString().includes("shortlisted"))
      setCurrentTab("shortlisted");
    else if (!isNaN(id)) setCurrentTab("");
    console.log(id);
  }, [id]);

  return (
    <div class="header">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="logo"
        placeholder="Search.."
      />
      <button onClick={() => handleFilter(text)} class="submit">
        Submit
      </button>
      <div class="header-right">
        <Link to="/">
          <a
            onClick={() => setCurrentTab("home")}
            className={currentTab === "home" ? "active" : "default"}
            href="/"
          >
            Home
          </a>
        </Link>
        <Link to="/rejected">
          <a
            onClick={() => setCurrentTab("rejected")}
            className={currentTab === "rejected" ? "active" : "default"}
            href="/rejected"
          >
            Rejected
          </a>
        </Link>
        <Link to="/shortlisted">
          <a
            onClick={() => setCurrentTab("shortlisted")}
            className={currentTab === "shortlisted" ? "active" : "default"}
            href="/shortlisted"
          >
            Shortlisted
          </a>
        </Link>
      </div>
    </div>
  );
}
