import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Statistic from '../Statistic';
import style from './Statistics.module.css';

export default class Statistics extends Component {
  static propTypes = {
    data: PropTypes.shape({
      good: PropTypes.string,
      bad: PropTypes.string,
      neutral: PropTypes.string,
    }).isRequired,
  };

  totalResult() {
    const { data } = this.props;
    return Object.values(data).reduce((total, item) => total + item, 0);
  }

  posititveFeedback() {
    const {
      data: { good },
    } = this.props;
    return parseInt((good * 100) / this.totalResult(), 10);
  }

  render() {
    const { data } = this.props;
    const { bad, good, neutral } = data;
    return (
      <ul className={style.ul}>
        <Statistic label="Good" value={good} />
        <Statistic label="Neutral" value={neutral} />
        <Statistic label="Bad" value={bad} />
        <Statistic label="Total" value={this.totalResult()} />
        <Statistic
          label="Posititve feedback"
          value={this.posititveFeedback()}
          sing="%"
        />
      </ul>
    );
  }
}
