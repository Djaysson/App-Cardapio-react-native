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
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.title,
    }),
  },
});

const AppContainer = createAppContainer(Navigator);
export default AppContainer;
