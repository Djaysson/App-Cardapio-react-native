import React, {Component} from 'react';
import {View, FlatList} from 'react-native';

export default class HomeList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <FlatList data={} renderItem={} />
      </View>
    );
  }
}
