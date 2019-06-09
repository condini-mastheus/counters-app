import React from 'react';
import { Animated } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '~/components/Header';
import {
  Container,
  List,
  CounterContainer,
  Counter,
  CounterTitle,
  CounterNumber,
  EmptyList,
} from './styles';

import { Creators as CountersActions } from '~/store/ducks/counters';

function Main({ counters, selectCounter }) {
  const scrollOffset = new Animated.Value(0);

  return (
    <Container>
      <Header title="Counters" scrollOffset={scrollOffset} />
      <List
        data={counters.data}
        extraData={counters.current.id}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Counter onPress={() => selectCounter(item)}>
            <CounterContainer active={item.id === counters.current.id}>
              <CounterTitle>{`Counter ${item.id}`}</CounterTitle>
              <CounterNumber>{item.counter}</CounterNumber>
            </CounterContainer>
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

const mapStateToProps = state => ({
  counters: state.counters,
});

const mapDispatchToProps = dispatch => bindActionCreators(CountersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
