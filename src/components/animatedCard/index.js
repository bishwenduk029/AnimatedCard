import React from "react";
import PropTypes from "prop-types";
import { CardLayout, CardBody, CardFooter, TextBody } from "./style";

class AnimatedCard extends React.Component {
  state = {
    expand: false,
    cardHeight: 225
  };

  toggelHeight = () => {
    this.setState(currentState => ({
      expand: !currentState.expand
    }));
  };

  expandCardHeight = (originalHeight = 0, byHeight = 200) => {
    return originalHeight + byHeight;
  };

  render() {
    const FoooterSvg = this.props.footerSvg;
    return (
      <CardLayout
        height={
          this.state.expand
            ? this.expandCardHeight(this.state.cardHeight, 50)
            : this.state.cardHeight
        }
      >
        <CardBody>
          <img
            style={{ zIndex: 1 }}
            width="100%"
            src="https://cdn-images-1.medium.com/max/1200/1*SL4sWHdjGR3vo0x5ta3xfw.jpeg"
          />
          <TextBody
            yShift={this.state.expand ? 0 : -120}
            fade={this.state.expand}
          >
            All that goes comes back make me rich man please.
          </TextBody>
        </CardBody>
        <CardFooter
          onClick={this.toggelHeight}
          rotate={this.state.expand ? 0 : 180}
        >
          <FoooterSvg />
        </CardFooter>
      </CardLayout>
    );
  }
}

export default AnimatedCard;

AnimatedCard.propTypes = {
  footerSvg: PropTypes.element
};

AnimatedCard.defaultProps = {
  footerSvg: props => (
    <svg
      class="chevron"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 35"
      width="30"
    >
      <path d="M5 30L50 5l45 25" fill="none" stroke="#000" stroke-width="5" />
    </svg>
  )
};
