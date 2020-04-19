import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Footers from '../../components/Footers';

class InboxScreen extends Component {
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

export default InboxScreen;

const styles = StyleSheet.create({});
