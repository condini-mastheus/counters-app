import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '~/styles';

export const CustomIcon = styled(Icon).attrs(props => ({
  size: 21,
  color: props.focused ? colors.white : colors.dark,
}))`
  position: relative;
  top: 2px;
`;
