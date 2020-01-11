import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistic.module.css';

const Statistic = ({ label, value, sing }) => {
  return (
    <li className={style.block}>
      <span className={style.name}>{label}:</span>
      <span className="value">{value}</span>
      <span className="sing">{sing}</span>
    </li>
  );
};

Statistic.defaultProps = {
  sing: '',
};

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  sing: PropTypes.string,
};

export default Statistic;
