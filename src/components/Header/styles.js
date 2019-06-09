import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { colors, metrics } from '~/styles';

export const Container = styled(Animated.View)`
  background: ${colors.primary};
  height: 150px;
  padding: ${metrics.basePadding}px;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const Title = styled(Animated.Text)`
  font-size: 24px;
  color: ${colors.white};
  font-weight: bold;
`;
