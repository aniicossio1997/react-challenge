import React from "react";

const PowerstatsItem = ({index,power}) => {
  return (
    <>
            <li
            className={` text-capitalize  ${
              index === 0
                ? " list-group-item active "
                : "list-group-item bg-transparent"
            }`}
            key={index}
            aria-current="true"
          >
            {power.name} : {power.value}
          </li>

    </>
  );
};

export default PowerstatsItem;
