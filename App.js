import React, {Component} from 'react';
import 'react-native-gesture-handler';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Container, Item, Input, Icon, Button, Text, Left} from 'native-base';
import {Platform, StyleSheet, View, Image} from 'react-native';

import Footers from './components/Footers';
import Header from './components/Header';
import ChatScreen from './screen/ChatScreen/ChatScreen';
import InboxScreen from './screen/InboxScreen/InboxScreen';
import LoginScreen from './screen/LoginScreen/LoginScreen';
import OrderScreen from './screen/OrderScreen/OrderScreen';
import ShopScreen from './screen/ShopScreen/ShopScreen';
import InProgress from './components/tabMyOrder/inProgress';
import Completed from './components/tabMyOrder/completed';

export function App() {
  return (
    <>
      <View />
      <Header />
      <View style={{marginTop: 590}}>
        <Footers />
      </View>
    </>
  );
}

const Router = createStackNavigator(
  {
    App: {
      screen: App,
      navigationOptions: {
        headerShown: false,
      },
    },
    ChatScreen: {
      screen: ChatScreen,
    },
    InboxScreen: {
      screen: InboxScreen,
      navigationOptions: {
        headerTitleStyle: {textAlign: 'center'},
        headerTitleAlign: {},
        title: 'Inbox',
        headerLeft: null,
      },
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        headerTitleStyle: {textAlign: 'center'},
        headerTitleAlign: {},
        title: 'Login',
        headerLeft: null,
      },
    },
    OrderScreen: {
      screen: OrderScreen,
      navigationOptions: {
        headerTitleStyle: {textAlign: 'center'},
        headerTitleAlign: {},
        title: 'My Order',
        headerLeft: null,
      },
    },
    ShopScreen: {
      screen: ShopScreen,
    },
    InProgressTab: {
      screen: InProgress,
    },
    Completed: {
      screen: Completed,
    },
  },
  {initialRouteName: 'App'},
);

const styles = StyleSheet.create({
  bgputih: {
    backgroundColor: 'green',
    color: 'white',
  },
  header: {
    color: 'white',
  },
});

export default createAppContainer(Router);
