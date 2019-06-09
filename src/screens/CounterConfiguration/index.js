import React from 'react';

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

function CounterConfiguration() {
  return (
    <Container>
      <Header title="Configuration" />
      <Content>
        <SelectedSection>
          <SelectedCounterTitle>Selected Counter</SelectedCounterTitle>

          <ActionsContainer>
            <ActionButton>
              <ActionIcon name="ios-remove" />
            </ActionButton>
            <CounterNumber>1</CounterNumber>
            <ActionButton>
              <ActionIcon name="ios-add" />
            </ActionButton>
          </ActionsContainer>

          <RemoveButton>
            <RemoveIcon />
            <RemoveButtonText>REMOVE</RemoveButtonText>
          </RemoveButton>
        </SelectedSection>

        <Section>
          <Title>Counters</Title>
          <AddButton>
            <AddIcon />
            <AddButtonText>NEW COUNTER</AddButtonText>
          </AddButton>
        </Section>
      </Content>
    </Container>
  );
}

export default CounterConfiguration;
