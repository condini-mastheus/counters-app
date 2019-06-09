import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import { colors } from '~/styles';

import Main from '~/screens/Main';
import CounterConfiguration from '~/screens/CounterConfiguration';
import TabBarIcon from '~/components/TabBarIcon';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Counters: {
        screen: Main,
        navigationOptions: {
          title: 'Counters',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-list" />,
        },
      },
      Configuration: {
        screen: CounterConfiguration,
        navigationOptions: {
          title: 'Configuration',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-settings" />,
        },
      },
    },
    {
      tabBarOptions: {
        style: {
          backgroundColor: colors.primary,
          padding: 5,
        },
        inactiveTintColor: colors.dark,
        activeTintColor: colors.white,
      },
    },
  ),
);

export default Routes;
