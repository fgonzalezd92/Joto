import React from "react";
import PropTypes from "prop-types";

/**
 * Functional react component  for congratulatory message.
 * @param {Object} props React props.
 * @return {JSX.Element} Rendered component.
 */
// eslint-disable-next-line import/no-anonymous-default-export
const Congrats = (props) => {
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

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
