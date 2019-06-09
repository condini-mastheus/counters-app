import React from 'react';

import {
  List, Counter, CounterTitle, CounterNumber, EmptyList,
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

function CountersList() {
  return (
    <List
      data={counters}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <Counter active={item.id === 1}>
          <CounterTitle>{`Counter ${item.id}`}</CounterTitle>
          <CounterNumber>{item.counter}</CounterNumber>
        </Counter>
      )}
      // onEndReachedThreshold={0.5}
      // onEndReached={this.handleOnEndReached}
      // onRefresh={this.handleRefresh}
      // refreshing={refreshing}
      ListEmptyComponent={() => (
        <EmptyList>Your counter list is empty, add counters to interact</EmptyList>
      )}
    />
  );
}

export default CountersList;
