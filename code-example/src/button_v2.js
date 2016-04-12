import Radium from 'radium';
import React, {Component} from 'react';

import buttonStyles from './button-styles';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={[buttonStyles.baseRadium, this.props.style]}
       >
        <span style={buttonStyles.span}>{this.props.label}</span>
      </div>
    );
  }
}

export default Radium(Button);
