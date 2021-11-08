import React from "react";

/**
 * Functional react component  for congratulatory message.
 * @param {Object} props React props.
 * @return {JSX.Element} Rendered component.
 */
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! You guessed the world!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats"></div>;
  }
};
