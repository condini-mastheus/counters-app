import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors, metrics } from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.secundary};
`;

export const Content = styled.View`
  flex: 1;
`;

export const Section = styled.View`
  padding: ${metrics.basePadding}px;
`;

export const SelectedSection = styled(Section)`
  padding: ${metrics.basePadding}px;
  background: #fff;
  justify-content: center;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${colors.light};
  font-weight: bold;
  margin-bottom: 5px;
`;

export const SelectedCounterTitle = styled.Text`
  font-size: 20px;
  color: ${colors.dark};
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

export const AddButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
  hitSlop: {
    top: 5,
    bottom: 5,
    left: 10,
    right: 10,
  },
})`
  height: 42px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${colors.primary};
`;

export const AddIcon = styled(Icon).attrs({
  size: 25,
  name: 'ios-add',
  color: '#fff',
})`
  margin-right: 10px;
`;

export const AddButtonText = styled.Text`
  color: ${colors.white};
  font-weight: bold;
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: ${metrics.baseMargin * 2}px;
`;

export const ActionButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
  hitSlop: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
})`
  justify-content: center;
  align-items: center;
  background: ${colors.primary};
  height: 30px;
  width: 30px;
  border-radius: ${metrics.baseRadius * 10};
`;

export const ActionIcon = styled(Icon).attrs(props => ({
  color: '#fff',
  size: 25,
  name: props.name,
}))``;

export const CounterNumber = styled.Text`
  color: ${colors.dark};
  font-size: 30px;
  margin: 0 ${metrics.baseMargin * 2}px;
`;

export const RemoveButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
  hitSlop: {
    top: 5,
    bottom: 5,
    left: 10,
    right: 10,
  },
})`
  margin-top: ${metrics.baseMargin * 2};
  height: 42px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #e24158;
`;

export const RemoveIcon = styled(Icon).attrs({
  size: 18,
  name: 'ios-trash',
  color: '#fff',
})`
  margin-right: 10px;
`;

export const RemoveButtonText = styled.Text`
  font-size: 16px;
  color: ${colors.white};
`;
