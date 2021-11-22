import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "./card";
import "./home.css";

export default function Home({ profiles, filter }) {
  return (
    <>
      <Card profiles={profiles} filter={filter} />
    </>
  );
}
