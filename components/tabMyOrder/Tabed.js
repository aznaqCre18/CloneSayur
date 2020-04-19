import React, {Component} from 'react';
import {Container, Header, Content, Tab, Tabs} from 'native-base';
import {StyleSheet, View, Text} from 'react-native';
import {withNavigation} from 'react-navigation';

import InProgress from './inProgress';
import Completed from './completed';

class Tabed extends Component {
  render() {
    return (
      <Container>
        <Tabs tabBarUnderlineStyle={styles.underline}>
          <Tab
            heading="In Progress"
            textStyle={styles.colors}
            activeTextStyle={styles.colors}
            activeTabStyle={styles.tabstyle}
            tabStyle={styles.tabstyle}>
            <InProgress />
          </Tab>
          <Tab
            heading="Completed"
            textStyle={styles.colors}
            activeTextStyle={styles.colors}
            tabStyle={styles.tabstyle}
            activeTabStyle={styles.tabstyle}>
            <Completed />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  colors: {
    color: 'green',
  },
  tabstyle: {
    backgroundColor: 'white',
    color: 'green',
  },
  underline: {
    backgroundColor: 'green',
    borderRadius: 5,
  },
});

export default withNavigation(Tabed);
