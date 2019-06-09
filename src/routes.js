import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import { colors } from '~/styles';

import Main from '~/screens/Main';
import CounterConfiguration from '~/screens/CounterConfiguration';
import TabBarIcon from '~/components/TabBarIcon';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Search: {
        screen: Main,
        navigationOptions: {
          title: 'Counters',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-list" />,
        },
      },
      A: {
        screen: CounterConfiguration,
        navigationOptions: {
          title: 'Settings',
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
