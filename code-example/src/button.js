import React, {Component} from 'react';

import buttonStyles from './button-styles';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  render() {
    const containerStyle = Object.assign(
      {},
      buttonStyles.base,
      this.state.isHovered ? buttonStyles.baseOnHover : null,
      this.props.style
    );
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={containerStyle}
       >
        <span style={buttonStyles.span}>{this.props.label}</span>
      </div>
    );
  }

  handleMouseEnter() {
    this.setState({
      isHovered: true
    });
  }

  handleMouseLeave() {
    this.setState({
      isHovered: false
    });
  }
}
