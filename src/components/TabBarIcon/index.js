import React from 'react';
import PropTypes from 'prop-types';

import { CustomIcon } from './styles';

const TabBarIcon = ({ name, focused }) => <CustomIcon name={name} focused={focused} />;

TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
};

export default TabBarIcon;
