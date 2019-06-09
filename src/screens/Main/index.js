import React from 'react';
import { Animated } from 'react-native';

import Header from '~/components/Header';
import {
  Container, List, Counter, CounterTitle, CounterNumber, EmptyList,
} from './styles';

const counters = [
  {
    id: 1,
    counter: 1,
  },
  {
    id: 2,
    counter: 1,
  },
  {
    id: 3,
    counter: 1,
  },
  {
    id: 4,
    counter: 1,
  },
  {
    id: 5,
    counter: 1,
  },
  {
    id: 6,
    counter: 1,
  },
  {
    id: 7,
    counter: 1,
  },
  {
    id: 8,
    counter: 1,
  },
  {
    id: 9,
    counter: 1,
  },
];

function Main() {
  const scrollOffset = new Animated.Value(0);

  return (
    <Container>
      <Header title="Counters" scrollOffset={scrollOffset} />
      <List
        data={counters}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Counter active={item.id === 1}>
            <CounterTitle>{`Counter ${item.id}`}</CounterTitle>
            <CounterNumber>{item.counter}</CounterNumber>
          </Counter>
        )}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: scrollOffset,
              },
            },
          },
        ])}
        // onEndReachedThreshold={0.5}
        // onEndReached={this.handleOnEndReached}
        // onRefresh={this.handleRefresh}
        // refreshing={refreshing}
        ListEmptyComponent={() => (
          <EmptyList>Your counter list is empty, add counters to interact</EmptyList>
        )}
      />
    </Container>
  );
}

export default Main;
