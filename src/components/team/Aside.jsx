import React from "react";
import { Link } from "react-router-dom";
import PowerstatsItem from "./PowerstatsItem";
const Aside = ({ averageHeight, averageWeight, powerstats }) => {
  return (
    <>
      <Link className="btn btn-lg btn-primary mb-1 btn-block " to="/team/add">
        Add Hero
      </Link>
      <br />
      <ul className="list-group color-bg-t">
        {powerstats.map((power, index) => (
          <div key={index}>
            <PowerstatsItem power={power} index={index} />
          </div>
        ))}
        <li className="list-group-item bg-transparent text-capitalize">
          Height: {averageHeight}cm{" "}
        </li>
        <li className="list-group-item bg-transparent text-capitalize">
          Weight: {averageWeight}kg{" "}
        </li>
      </ul>
    </>
  );
};

export default Aside;
