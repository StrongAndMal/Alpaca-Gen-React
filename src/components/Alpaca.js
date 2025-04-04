import React, { useState, useEffect, useCallback, useRef } from "react";
import html2canvas from "html2canvas";
import "./Alpaca.css";

const alpacaParts = {
  neck: ["default", "thick", "bend-backward", "bend-forward"],
  eyes: ["default", "angry", "naughty", "panda", "smart", "star"],
  mouth: ["default", "astonished", "eating", "laugh", "tongue"],
  hair: ["default", "bang", "curls", "elegant", "fancy", "quiff", "short"],
  accessories: ["earings", "flower", "glasses", "headphone"],
  leg: [
    "default",
    "tilt-backward",
    "bubble-tea",
    "cookie",
    "game-console",
    "tilt-forward",
  ],
  background: [
    "blue50",
    "blue60",
    "blue70",
    "darkblue30",
    "darkblue50",
    "darkblue70",
    "green50",
    "green60",
    "green70",
    "grey40",
    "grey70",
    "grey80",
    "red50",
    "red60",
    "red70",
    "yellow50",
    "yellow60",
    "yellow70",
  ],
};

const Alpaca = () => {
  const [alpacaState, setAlpacaState] = useState({});
  const [selectedPart, setSelectedPart] = useState("eyes");
  const alpacaRef = useRef(null);

  const getRandomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const generateRandomAlpaca = useCallback(() => {
    const newState = {};
    for (const [partName, variations] of Object.entries(alpacaParts)) {
      newState[partName] = getRandomElement(variations);
    }
    setAlpacaState(newState);
  }, []);

  const generateRandomPart = (partName) => {
    setAlpacaState((prev) => ({
      ...prev,
      [partName]: getRandomElement(alpacaParts[partName]),
    }));
  };

  const downloadAlpaca = async () => {
    if (!alpacaRef.current) return;

    try {
      const canvas = await html2canvas(alpacaRef.current);
      const link = document.createElement("a");
      link.download = "my-alpaca.png";
      link.href = canvas.toDataURL();
      link.click();
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  useEffect(() => {
    generateRandomAlpaca();
  }, [generateRandomAlpaca]);

  return (
    <div className="alpaca-generator">
      <div className="alpaca-container">
        <div ref={alpacaRef} className="alpaca">
          {/* Background layer */}
          {alpacaState.background && (
            <div
              className="alpaca-part background"
              style={{
                backgroundImage: `url('${process.env.PUBLIC_URL}/backgrounds/${alpacaState.background}.png')`,
              }}
            />
          )}
          {/* Neck layer - always visible */}
          {alpacaState.neck && (
            <div
              className="alpaca-part neck"
              style={{
                backgroundImage: `url('${process.env.PUBLIC_URL}/neck/${alpacaState.neck}.png')`,
              }}
            />
          )}
          {/* Nose - always visible and fixed */}
          <div
            className="alpaca-part nose"
            style={{
              backgroundImage: `url('${process.env.PUBLIC_URL}/nose.png')`,
            }}
          />
          {/* Leg - always visible */}
          {alpacaState.leg && (
            <div
              className="alpaca-part leg"
              style={{
                backgroundImage: `url('${process.env.PUBLIC_URL}/leg/${alpacaState.leg}.png')`,
              }}
            />
          )}
          {/* Other parts */}
          {Object.entries(alpacaState).map(([partName, variation]) => {
            if (
              partName === "background" ||
              partName === "neck" ||
              partName === "leg"
            )
              return null;
            return (
              <div
                key={`${partName}-${variation}`}
                className={`alpaca-part ${partName}`}
                style={{
                  backgroundImage: `url('${process.env.PUBLIC_URL}/${partName}/${variation}.png')`,
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="controls">
        <div className="style-selector">
          <h3>Select Style</h3>
          <div className="part-buttons">
            {Object.keys(alpacaParts).map((part) => (
              <button
                key={part}
                className={`part-button ${
                  selectedPart === part ? "active" : ""
                }`}
                onClick={() => setSelectedPart(part)}
              >
                {part.charAt(0).toUpperCase() + part.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="variation-selector">
          <h3>Select Variation</h3>
          <div className="variation-buttons">
            {alpacaParts[selectedPart].map((variation) => (
              <button
                key={variation}
                className={`variation-button ${
                  alpacaState[selectedPart] === variation ? "active" : ""
                }`}
                onClick={() =>
                  setAlpacaState((prev) => ({
                    ...prev,
                    [selectedPart]: variation,
                  }))
                }
              >
                {variation.charAt(0).toUpperCase() + variation.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="action-buttons">
          <button
            onClick={() => generateRandomPart(selectedPart)}
            className="action-button"
          >
            Random{" "}
            {selectedPart.charAt(0).toUpperCase() + selectedPart.slice(1)}
          </button>
          <button onClick={generateRandomAlpaca} className="action-button">
            Random All
          </button>
          <button onClick={downloadAlpaca} className="action-button download">
            Download Alpaca
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alpaca;
