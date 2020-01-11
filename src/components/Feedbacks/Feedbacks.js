import React from 'react';
import PropTypes from 'prop-types';

const Feedback = ({ onFeedback, options }) => {
  // eslint-disable-next-line react/prop-types
  const button = options.map(item => {
    return (
      <button
        key={item.dataLabel}
        type="button"
        onClick={onFeedback}
        data-label={item.dataLabel}
      >
        {item.label}
      </button>
    );
  });
  return <div className="d-flex">{button}</div>;
};

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
