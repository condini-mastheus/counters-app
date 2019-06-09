import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';

import { Container, Title } from './styles';

const Header = ({ title, scrollOffset }) => (
  <Container
    style={{
      height: scrollOffset.interpolate({
        inputRange: [0, 200, 220],
        outputRange: [150, 54, 50],
        extrapolate: 'clamp',
      }),
    }}
  >
    <Title
      style={{
        fontSize: scrollOffset.interpolate({
          inputRange: [0, 200, 220],
          outputRange: [24, 16, 15],
          extrapolate: 'clamp',
        }),
      }}
    >
      {title}
    </Title>
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  scrollOffset: PropTypes.instanceOf(Animated.Value),
};

Header.defaultProps = {
  scrollOffset: new Animated.Value(0),
};

export default Header;
