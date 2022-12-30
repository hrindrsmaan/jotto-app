import React from "react";

const Congrats = ({ success }) => {
  return success ? (
    <div data-test="component-congrats">
      <span data-test="congrats-msg">
        Congratulations! you guessed the word
      </span>
    </div>
  ) : (
    <div data-test="component-congrats">
      <span data-test="congrats-msg"></span>
    </div>
  );
};

export default Congrats;
