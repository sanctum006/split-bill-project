import { useState } from "react";
import "./App.css";
import People from "./Components/People/People";
import ShowSplits from "./Components/ShowSplits/ShowSplits";

function App() {
  const people = [
    { name: "Chuck", id: "1" },
    { name: "Bob", id: "2" },
    { name: "Alice", id: "3" },
    { name: "John", id: "4" },
  ];

  const [splitBetween, setSplitBetween] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const [{ sharePerHead, showSplit }, setShowSplit] = useState({
    sharePerHead: 0,
    showSplit: false,
  });

  return (
    <div className="app">
      <People
        people={people}
        splitBetween={splitBetween}
        setShowSplit={setShowSplit}
        setSplitBetween={setSplitBetween}
      />
      {showSplit && (
        <ShowSplits
          people={people}
          sharePerHead={sharePerHead}
          splitBetween={splitBetween}
        />
      )}
    </div>
  );
}

export default App;
