import React, { useState } from "react";
import "./People.css";

function People({ people, splitBetween, setShowSplit, setSplitBetween }) {
  const [bill, setBill] = useState("");

  const [tempSplit, setTempSplit] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setSplitBetween(tempSplit);
    let count = 1;

    for (let i = 1; i <= 4; i++) {
      if (tempSplit[i]) count++;
    }

    setShowSplit({ showSplit: true, sharePerHead: parseInt(bill) / count });

    setTempSplit({
      1: false,
      2: false,
      3: false,
      4: false,
    });

    setBill("");
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
                  checked={tempSplit[person.id]}
                  onClick={() => {
                    setTempSplit((prev) => {
                      return {
                        ...prev,
                        [person.id]: !prev[person.id],
                      };
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
