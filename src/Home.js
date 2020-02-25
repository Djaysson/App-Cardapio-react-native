import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import HomeList from './HomeList';
import HomeProducts from './HomeProducts';

const Navigator = createStackNavigator({
  HomeList: {
    screen: HomeList,
    navigationOptions: {
      title: 'Restaurant ',
    },
  },
  HomeProducts: {
    screen: HomeProducts,
  },
});

const AppContainer = createAppContainer(Navigator);
export default AppContainer;
