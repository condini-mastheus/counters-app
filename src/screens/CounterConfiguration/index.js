import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '~/components/Header';

import {
  Container,
  Content,
  Section,
  SelectedSection,
  Title,
  AddButton,
  AddIcon,
  AddButtonText,
  SelectedCounterTitle,
  ActionsContainer,
  ActionButton,
  ActionIcon,
  CounterNumber,
  RemoveButton,
  RemoveIcon,
  RemoveButtonText,
} from './styles';

import { Creators as CountersActions } from '~/store/ducks/counters';

function CounterConfiguration({
  counters,
  removeCurrentCounter,
  createNewCounter,
  navigation,
  addCounter,
  subtractCounter,
}) {
  function handleCreateNewCounter() {
    createNewCounter();
    navigation.navigate('Counters');
  }

  function handleRemoveCounter() {
    removeCurrentCounter(counters.current.id);
    navigation.navigate('Counters');
  }

  return (
    <Container>
      <Header title="Configuration" />
      <Content>
        {Object.keys(counters.current).length !== 0 && (
          <SelectedSection>
            <SelectedCounterTitle>{`Counter ${counters.current.id}`}</SelectedCounterTitle>

            <ActionsContainer>
              <ActionButton onPress={subtractCounter}>
                <ActionIcon name="ios-remove" />
              </ActionButton>
              <CounterNumber>{counters.current.counter}</CounterNumber>
              <ActionButton onPress={addCounter}>
                <ActionIcon name="ios-add" />
              </ActionButton>
            </ActionsContainer>

            <RemoveButton onPress={handleRemoveCounter}>
              <RemoveIcon />
              <RemoveButtonText>REMOVE</RemoveButtonText>
            </RemoveButton>
          </SelectedSection>
        )}

        <Section>
          <Title>Counters</Title>
          <AddButton onPress={handleCreateNewCounter}>
            <AddIcon />
            <AddButtonText>NEW COUNTER</AddButtonText>
          </AddButton>
        </Section>
      </Content>
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
)(CounterConfiguration);
