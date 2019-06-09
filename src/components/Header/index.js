import React from 'react';

import { View } from 'react-native';

import { Container, Title } from './styles';

const Header = ({ title, translateY }) => (
  <Container>
    <Title>{title}</Title>
  </Container>
);

export default Header;
