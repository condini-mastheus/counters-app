import React from 'react';
import { Animated } from 'react-native';

import { Container, Title } from './styles';

const Header = ({ title, scrollOffset }) => (
  <Container
    style={{
      height: scrollOffset.interpolate({
        inputRange: [0, 300],
        outputRange: [150, 54],
        extrapolate: 'clamp',
      }),
    }}
  >
    <Title
      style={{
        fontSize: scrollOffset.interpolate({
          inputRange: [0, 300],
          outputRange: [24, 16],
          extrapolate: 'clamp',
        }),
      }}
    >
      {title}
    </Title>
  </Container>
);

Header.defaultProps = {
  scrollOffset: new Animated.Value(0),
};

export default Header;
