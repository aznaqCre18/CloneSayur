import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Footers from '../../components/Footers';

class ShopScreen extends Component {
  render() {
    return (
      <>
        <View>
          <Text>ChatScreen</Text>
        </View>
        <View style={{marginTop: 585}}>
          <Footers />
        </View>
      </>
    );
  }
}

export default ShopScreen;

const styles = StyleSheet.create({});
