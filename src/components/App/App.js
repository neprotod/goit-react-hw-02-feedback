import React, { Component } from 'react';

import Feedback from '../Feedbacks';
import Section from '../Section';
import Statistics from '../Statistics';
import Notification from '../Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    statistic: false,
  };

  button = [
    { label: 'Good', dataLabel: 'good' },
    { label: 'Neutral', dataLabel: 'neutral' },
    { label: 'Bad', dataLabel: 'bad' },
  ];

  changeFeedback = e => {
    const label = String(e.target.textContent).toLowerCase();

    // Validation
    if (this.state[label] === undefined) {
      throw new Error(`No label ${label} to feedback`);
    }

    this.setState(state => ({
      statistic: true,
      [label]: state[label] + 1,
    }));
  };

  render() {
    const { bad, good, neutral, statistic } = this.state;

    const toStatistic = {
      bad,
      good,
      neutral,
    };

    return (
      <div id="feedback">
        <Feedback onFeedback={this.changeFeedback} options={this.button} />
        <Section title="Statistic">
          {(!statistic && <Notification message="No feedback given" />) || (
            <Statistics data={toStatistic} />
          )}
        </Section>
      </div>
    );
  }
}
