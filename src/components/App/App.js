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
    staticstic: false,
  };

  button = [
    { label: 'Good', dataLabel: 'good' },
    { label: 'Neutral', dataLabel: 'neutral' },
    { label: 'Bad', dataLabel: 'bad' },
  ];

  changeFeedback = e => {
    const label = String(e.target.dataset.label).toLowerCase();

    // Validation
    if (this.state[label] === undefined) {
      throw new Error(`No label ${label} to fidback`);
    }

    this.setState(state => ({
      staticstic: true,
      [label]: state[label] + 1,
    }));
  };

  render() {
    const { bad, good, neutral, staticstic } = this.state;

    const toStatistic = {
      bad,
      good,
      neutral,
    };

    return (
      <div id="fidback">
        <Feedback onFeedback={this.changeFeedback} options={this.button} />
        <Section title="Staticstcs">
          {(!staticstic && <Notification message="No feedback given" />) || (
            <Statistics data={toStatistic} />
          )}
        </Section>
      </div>
    );
  }
}
