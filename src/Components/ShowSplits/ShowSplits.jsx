import React from "react";
import "./ShowSplits.css";

function ShowSplits({ people, splitBetween, sharePerHead }) {
  return (
    <div>
      {people.map((person) => {
        return (
          splitBetween[person.id] && (
            <div key={person.id}>
              <label>
                {person.name}{" "}
                <span style={{ color: "#016100" }}>
                  ₹{sharePerHead.toFixed(2)}
                </span>
              </label>
            </div>
          )
        );
      })}
    </div>
  );
}

export default ShowSplits;
