import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { colors, metrics } from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.secundary};
`;

export const List = styled(Animated.FlatList).attrs({
  contentContainerStyle: {
    paddingTop: metrics.basePadding / 2,
    paddingBottom: metrics.basePadding,
    paddingHorizontal: metrics.basePadding,
  },
})``;

export const Counter = styled.View`
  margin-top: 10px;
  background: ${colors.white};
  border-radius: ${metrics.baseRadius * 3};
  padding: ${metrics.basePadding / 2}px;
  opacity: ${props => (props.active ? 1 : 0.65)};
  justify-content: center;
  align-items: flex-end;
`;

export const CounterTitle = styled.Text`
  font-size: 12px;
  color: ${colors.dark};
  align-self: flex-start;
`;

export const CounterNumber = styled.Text`
  font-size: 60px;
  color: ${colors.black};
  text-align: center;
`;

export const EmptyList = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  color: ${colors.white};
  text-align: center;
`;
