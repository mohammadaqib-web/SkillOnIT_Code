import { useState } from "react";
import "./App.css";
import DICE from "./assets/dices1.png";
import DICE1 from "./assets/dice_1.png";
import DICE2 from "./assets/dice_2.png";
import DICE3 from "./assets/dice_3.png";
import DICE4 from "./assets/dice_4.png";
import DICE5 from "./assets/dice_5.png";
import DICE6 from "./assets/dice_6.png";

const images = [DICE1, DICE2, DICE3, DICE4, DICE5, DICE6];

function App() {
  const [showEntryPage, setShowEntryPage] = useState(true);
  const [showRules, setShowRules] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [diceImg, setDiceImg] = useState(DICE1);

  const handleDice = () => {
    if (!selectedNumber) {
      return alert("Select a number to roll the dice");
    }
    const randomValue = Math.floor(Math.random() * 6) + 1;
    setDiceImg(images[randomValue - 1]);

    if (selectedNumber === randomValue) {
      return setTotalScore(totalScore + randomValue);
    } else {
      return setTotalScore(totalScore - randomValue);
    }
  };

  return (
    <>
      {showEntryPage && (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              // justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{}}>
              <img
                src={DICE}
                alt="Dices image"
                width={"160%"}
                style={{ marginLeft: "-100px" }}
              />
            </div>
            <div style={{ marginLeft: "150px" }}>
              <h1 id="heading">DICE GAME</h1>
              <button id="play" onClick={() => setShowEntryPage(false)}>
                Play Now
              </button>
            </div>
          </div>
        </div>
      )}

      {!showEntryPage && (
        <div
          style={{
            maxHeight: "100vh",
          }}
        >
          <div id="nav">
            <div>
              <h1 id="ts">{totalScore}</h1>
              <h2>Total Score</h2>
            </div>
            <div>
              <div id="right-nav">
                <h2
                  className="numbers"
                  style={{
                    backgroundColor: selectedNumber === 1 ? "black" : "white",
                    color: selectedNumber === 1 ? "white" : "black",
                  }}
                  onClick={() => setSelectedNumber(1)}
                >
                  1
                </h2>
                <h2
                  className="numbers"
                  style={{
                    backgroundColor: selectedNumber === 2 ? "black" : "white",
                    color: selectedNumber === 2 ? "white" : "black",
                  }}
                  onClick={() => setSelectedNumber(2)}
                >
                  2
                </h2>
                <h2
                  className="numbers"
                  style={{
                    backgroundColor: selectedNumber === 3 ? "black" : "white",
                    color: selectedNumber === 3 ? "white" : "black",
                  }}
                  onClick={() => setSelectedNumber(3)}
                >
                  3
                </h2>
                <h2
                  className="numbers"
                  style={{
                    backgroundColor: selectedNumber === 4 ? "black" : "white",
                    color: selectedNumber === 4 ? "white" : "black",
                  }}
                  onClick={() => setSelectedNumber(4)}
                >
                  4
                </h2>
                <h2
                  className="numbers"
                  style={{
                    backgroundColor: selectedNumber === 5 ? "black" : "white",
                    color: selectedNumber === 5 ? "white" : "black",
                  }}
                  onClick={() => setSelectedNumber(5)}
                >
                  5
                </h2>
                <h2
                  className="numbers"
                  style={{
                    backgroundColor: selectedNumber === 6 ? "black" : "white",
                    color: selectedNumber === 6 ? "white" : "black",
                  }}
                  onClick={() => setSelectedNumber(6)}
                >
                  6
                </h2>
              </div>
              <h2 style={{ textAlign: "right", marginTop: "15px" }}>
                Select Number
              </h2>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div id="main">
              <img src={diceImg} alt="dice image" onClick={handleDice} />
              <h3>Click on Dice to roll</h3>
              <br />
              <button
                className="dice-btn"
                style={{ backgroundColor: "white" }}
                onClick={() => setTotalScore(0)}
              >
                Reset Score
              </button>
              <br />
              <button
                className="dice-btn"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                }}
                onClick={() => setShowRules(!showRules)}
              >
                {showRules ? "Hide" : "Show"} Rules
              </button>

              <br />

              {showRules && (
                <div
                  style={{
                    width: "700px",
                    backgroundColor: "rgba(0,0,0,0.1)",
                    padding: "20px",
                  }}
                >
                  <h3>How to play dice game</h3>
                  <br />
                  <p>- Select any number</p>
                  <p>- Click on dice image</p>
                  <p>
                    - after click on dice if selected number is equal to dice
                    number you will get same point as dice{" "}
                  </p>
                  <p>- if you get wrong guess then 2 point will be dedcuted </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
