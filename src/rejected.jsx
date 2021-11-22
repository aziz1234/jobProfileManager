import React from "react";
import { Card } from "./card";

export default function Rejected({ profiles, filter }) {
  return profiles.length ? <Card profiles={profiles} filter={filter} /> : null;
}
