import React, { useState } from "react";
import "./People.css";

function People({ people, splitBetween, setShowSplit, setSplitBetween }) {
  const [bill, setBill] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let count = 1;

    for (let i = 1; i <= 4; i++) {
      if (splitBetween[i]) count++;
    }

    setShowSplit({ showSplit: true, sharePerHead: parseInt(bill) / count });
  };

  return (
    <div>
      <form className="people-form">
        <input
          name="bill"
          type={"text"}
          value={bill}
          placeholder="Enter Bill Amount"
          onChange={(e) => {
            setBill(e.target.value);
          }}
        />
        <div className="input-container">
          {people.map((person) => (
            <div key={person.id}>
              <label>
                <input
                  name={person.id}
                  type={"checkbox"}
                  onClick={() => {
                    setSplitBetween({
                      ...splitBetween,
                      [person.id]: !splitBetween[person.id],
                    });
                  }}
                />
                {person.name}
              </label>
            </div>
          ))}
        </div>
        <button onClick={handleSubmit} className="split-btn">
          Split
        </button>
      </form>
    </div>
  );
}

export default People;
