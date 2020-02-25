import React, {Component} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableHighlight,
  Text,
} from 'react-native';

export default class HomeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          key: 1,
          title: 'Prato Executivo',
          img: require('../assets/images/tipos/pe.png'),
          description: 'Pratos já prontos.',
          bg: '#e35339',
          produtos: [
            {
              name: 'Prato de Frango',
              img: require('../assets/images/cardapio/pe/executivos_frang_.png'),
            },
            {
              name: 'Prato de Peixe',
              img: require('../assets/images/cardapio/pe/executivos_peix_.png'),
            },
            {
              name: 'Prato de Picanha',
              img: require('../assets/images/cardapio/pe/executivos_picanh_.png'),
            },
          ],
        },
        {
          key: 2,
          title: 'Saladas',
          img: require('../assets/images/tipos/saladas.png'),
          description: 'Pratos saudáveis.',
          bg: '#a6bb24',
          produtos: [
            {
              name: 'Salada de Frango',
              img: require('../assets/images/cardapio/saladas/salada_fr.png'),
            },
            {
              name: 'Salada de Agua Doce',
              img: require('../assets/images/cardapio/saladas/salada_aguadoc_.png'),
            },
            {
              name: 'Salada de Salmão',
              img: require('../assets/images/cardapio/saladas/salada_salma.png'),
            },
          ],
        },
        {
          key: 3,
          title: 'Bebidas',
          img: require('../assets/images/tipos/bebidas.png'),
          description: 'Bebidas disponiveis.',
          bg: '#079ed4',
          produtos: [
            {
              name: 'Caipirosca de limão',
              img: require('../assets/images/cardapio/bebidas/capirosc_3.png'),
            },
            {
              name: 'Cookie Cream',
              img: require('../assets/images/cardapio/bebidas/cookies_crea.png'),
            },
            {
              name: 'Morango GD',
              img: require('../assets/images/cardapio/bebidas/morango_gd.png'),
            },
            {
              name: 'Patra',
              img: require('../assets/images/cardapio/bebidas/patra.png'),
            },
            {
              name: 'Suco Fitness',
              img: require('../assets/images/cardapio/bebidas/suco_fitines_gd.png'),
            },
          ],
        },
        {
          key: 4,
          title: 'Sobremesas',
          img: require('../assets/images/tipos/sobremesa.png'),
          description: 'Sobremesas.',
          bg: '#fcb81c',
          produtos: [
            {
              name: 'Brownie',
              img: require('../assets/images/cardapio/sobremesas/brownie_gd.png'),
            },
            {
              name: 'Creme Papaya',
              img: require('../assets/images/cardapio/sobremesas/creme_papaya_gd.png'),
            },
            {
              name: 'Delicia Gelada',
              img: require('../assets/images/cardapio/sobremesas/delicia_gelada_gd.png'),
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.list}
          renderItem={({item}) => <Lista data={item} />}
        />
      </View>
    );
  }
}

class Lista extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.clicou = this.clicou.bind(this);
  }
  clicou() {}
  render() {
    return (
      <TouchableHighlight underlayColor="#CCCCCC" onPress={this.clicou}>
        <View style={[styles.listItem, {backgroundColor: this.props.data.bg}]}>
          <Image source={this.props.data.img} style={styles.listImage} />
          <View>
            <Text style={styles.listTitle}>{this.props.data.title}</Text>
            <Text style={styles.listDescription}>
              {this.props.data.description}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  listItem: {
    height: 100,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  listImage: {
    width: 64,
    height: 64,
    marginLeft: 20,
    marginRight: 20,
  },
  listTitle: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  listDescription: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
