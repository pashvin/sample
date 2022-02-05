import React from 'react';
import './HitTarget.css';

interface HitTargetProps {}

class HitTarget extends React.Component<any> {
  private isActive = false;

  constructor(props: any) {
    super(props);
  }

  activeDisplayClass = () => {
    if (this.props.target === this.props.currentTarget) {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
    if (this.isActive) {
      return "circle activeitem";
    } else {
      return "circle";
    }
  };

  onClick = () => {
    if (this.isActive) {
      this.props.scoreUp();
    } else {
      this.props.scoreDown();
    }
  };

  render() {
    return (
      <span className={this.activeDisplayClass()} onClick={this.onClick}></span>
    );
  }
}

export default HitTarget;
