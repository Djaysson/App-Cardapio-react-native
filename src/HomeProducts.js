import React, {Component} from 'react';

import {View, StyleSheet, FlatList, Text, Image} from 'react-native';

export default class HomeProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.navigation.state.params.products,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.list}
          renderItem={({item}) => <ProductItem data={item} />}
        />
      </View>
    );
  }
}

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.productItem}>
        <Image
          resizeMode="contain"
          source={this.props.data.img}
          style={styles.productImage}
        />
        <Text style={styles.productName}>{this.props.data.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCCC',
  },
  productItem: {
    height: 100,
    backgroundColor: '#FFFFFF',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 150,
    height: 80,
  },
  productName: {
    fontSize: 16,
  },
});
