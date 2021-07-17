import React from "react";
import { observer } from "mobx-react";
import { useMobX } from "../../index";

const HomePage = observer(() => {
  const setValue = (n) => {
    actions.app.setTestValue(n);
  };

  const { actions, helpers } = useMobX();
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
});

export default HomePage;
