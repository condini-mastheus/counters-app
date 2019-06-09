import React from 'react';

import Header from '~/components/Header';
import CountersList from '~/components/CountersList';
import { Container } from './styles';

function Main() {
  return (
    <Container>
      <Header title="Counters" />
      <CountersList />
    </Container>
  );
}

export default Main;
