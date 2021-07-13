import React from "react";
import { setup } from "../../utils/setup";

const HomePage = ({ actions, helpers }) => {
  const setValue = (n) => {
    actions.app.setTestValue(n);
  };

  return (
    <div className="home-wrapper">
      <h1 className="home-title">Home Page Example View</h1>
      <div className="test-number-wrapper">
        {/* example of reading state value */}
        <span className="test-number">{helpers.app.testValue}</span>
        <p style={{ marginTop: 30 }}>( Reading state example )</p>
      </div>
      <button
        className="btn-warning"
        onClick={() => {
          /* example of changing state value */
          setValue(helpers.app.testValue + 10);
        }}
      >
        Increase value by 10
      </button>
      <p>( Setting state example method )</p>
    </div>
  );
};

export default setup(HomePage);
