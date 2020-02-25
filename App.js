import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Home from './src/Home';
import Contato from './src/Contato';
import Horarios from './src/Horarios';
import Sobre from './src/Sobre';

const Navigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({focused}) => {
        if (focused) {
          return (
            <Image
              source={require('./assets/images/home_azul.png')}
              style={styles.icon}
            />
          );
        } else {
          return (
            <Image
              source={require('./assets/images/home_preto.png')}
              style={styles.icon}
            />
          );
        }
      },
    },
  },
  Contato: {
    screen: Contato,
    navigationOptions: {
      tabBarLabel: 'Contato',
      tabBarIcon: ({focused}) => {
        if (focused) {
          return (
            <Image
              source={require('./assets/images/contato_azul.png')}
              style={styles.icon}
            />
          );
        } else {
          return (
            <Image
              source={require('./assets/images/contato_preto.png')}
              style={styles.icon}
            />
          );
        }
      },
    },
  },
  Horarios: {
    screen: Horarios,
    navigationOptions: {
      tabBarLabel: 'Horário',
      tabBarIcon: ({focused}) => {
        if (focused) {
          return (
            <Image
              source={require('./assets/images/horario_azul.png')}
              style={styles.icon}
            />
          );
        } else {
          return (
            <Image
              source={require('./assets/images/horario_preto.png')}
              style={styles.icon}
            />
          );
        }
      },
    },
  },
  Sobre: {
    screen: Sobre,
    tabBarLabel: 'Sobre',
    navigationOptions: {
      tabBarIcon: ({focused}) => {
        if (focused) {
          return (
            <Image
              source={require('./assets/images/sobre_azul.png')}
              style={styles.icon}
            />
          );
        } else {
          return (
            <Image
              source={require('./assets/images/sobre_preto.png')}
              style={styles.icon}
            />
          );
        }
      },
    },
  },
});

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

const AppContainer = createAppContainer(Navigator);
export default AppContainer;
