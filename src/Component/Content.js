import React from "react";
import { useState } from "react";
import "../Component/style.css"

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
  [
    "Vanilla JavaScript requires imperative programming",
    "Imperative Programming: You define all the steps needed to achieve a result",
    "React on the other hand embraces declarative programming",
    "With React, you define the goal and React figures out how to get there",
  ],
];

export default function ContentDisplay() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <header>
        <img src="react-logo-xs.png" alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>
      <div id="tabs">
        <menu>
          <button
            className={activeIndex === 0 ? "active" : ""}
            onClick={() => setActiveIndex(0)}
          >
            Why React?
          </button>
          <button
            className={activeIndex === 1 ? "active" : ""}
            onClick={() => setActiveIndex(1)}
          >
            core Features
          </button>
          <button
            className={activeIndex === 2 ? "active" : ""}
            onClick={() => setActiveIndex(2)}
          >
            Related resourse
          </button>
          <button
            className={activeIndex === 3 ? "active" : ""}
            onClick={() => setActiveIndex(3)}
          >
            More information...
          </button>
        </menu>
        <div id="tab-content">
            <ul>
            {content[activeIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
            </ul>
        </div>
      </div>
    </div>
  );
}
