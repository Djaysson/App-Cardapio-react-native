import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Home from './src/Home';
import Contato from './src/Contato';
import Horarios from './src/Horarios';
import Carrinho from './src/Carrinho';

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
  Carrinho: {
    screen: Carrinho,
    tabBarLabel: 'Carrinho',
    navigationOptions: {
      tabBarIcon: ({focused}) => {
        if (focused) {
          return (
            <Image
              source={require('./assets/images/carrinho-azul.png')}
              style={styles.icon}
            />
          );
        } else {
          return (
            <Image
              source={require('./assets/images/carrinho-preto.png')}
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
});

const styles = StyleSheet.create({
  icon: {
    width: 27,
    height: 27,
  },
});

const AppContainer = createAppContainer(Navigator);
export default AppContainer;
