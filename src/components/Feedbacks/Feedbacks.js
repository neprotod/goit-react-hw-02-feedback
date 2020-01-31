import React from 'react';
import PropTypes from 'prop-types';

const Feedback = ({ onFeedback, options }) => (
  <div className="d-flex">
    {options &&
      options.map(item => (
        <button
          key={item.dataLabel}
          type="button"
          onClick={onFeedback}
          data-label={item.dataLabel}
        >
          {item.label}
        </button>
      ))}
  </div>
);

Feedback.propTypes = {
  onFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      dataLabel: PropTypes.string,
      label: PropTypes.string,
    }),
  ).isRequired,
};

export default Feedback;
