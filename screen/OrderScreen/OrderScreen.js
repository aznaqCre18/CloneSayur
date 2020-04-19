import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import TabTab from '../../components/tabMyOrder/Tabed';
import Footers from '../../components/Footers';

class OrderScreen extends Component {
  render() {
    return (
      <>
        <View style={{flex: 1}}>
          <TabTab />
        </View>
        <View>
          <Footers />
        </View>
      </>
    );
  }
}

export default OrderScreen;
