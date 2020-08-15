/**
 * @file ScrollTracker.js
 * @description Shows the scroll depth percentage as a bar on
 * top of the screen.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 1.0.0
 */

import React, { Component } from 'react';
import propTypes from 'prop-types';

class ScrollTracker extends Component {
  componentDidMount() {
    const self = document.getElementById('scroll-tracker');
    
    document.addEventListener('scroll', (evt) => {
      const limit = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight, 
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );

      const diff = limit - document.documentElement.clientHeight;
      const diffPercent = diff / limit;
      const percent = evt.target.scrollingElement.scrollTop / (limit * diffPercent);
      const pixCalc = (document.documentElement.clientWidth) * percent;

      self.style.width = `${pixCalc}px`;
    });
  }

  render() {
    const styles = {
      'position': 'fixed',
      'z-index': '10',
      'top': '0',
      'height': '3px',
      'background': 'blue'
    };

    return (
      <div style={styles} />
    );
  }
}

ScrollTracker.propTypes = {
  color: propTypes.string
};

export default ScrollTracker;