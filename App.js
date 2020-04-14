import React, {Component} from 'react';
import 'react-native-gesture-handler';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { Container, Item, Input, Icon, Button, Text, Left } from 'native-base';
import {Platform, StyleSheet, View, Image} from 'react-native';

import Footers from './components/Footers';
import Header from './components/Header'
import ChatScreen from './screen/ChatScreen'
import InboxScreen from './screen/InboxScreen'
import LoginScreen from './screen/LoginScreen'
import OrderScreen from './screen/OrderScreen'
import ShopScreen from './screen/ShopScreen'


export function App() {
  return (
    <>
      <View>
      </View>
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
      }
    },
    ChatScreen: {
      screen: ChatScreen
    },
    InboxScreen: {
      screen: InboxScreen,
      navigationOptions:{
        headerTitleStyle :{textAlign: 'center'},
        headerTitleAlign: {},
        title: "Inbox",
        headerLeft: null

      }
    },
    LoginScreen:{
      screen:LoginScreen,
      navigationOptions:{
        headerTitleStyle :{textAlign: 'center'},
        headerTitleAlign: {},
        title: "Login",
        headerLeft: null

      }
    },
    OrderScreen:{
      screen:OrderScreen,
      navigationOptions:{
        headerTitleStyle :{textAlign: 'center'},
        headerTitleAlign: {},
        title: "My Order",
        headerLeft: null

      }
    },
    ShopScreen:{
      screen: ShopScreen
    }

  },
  {initialRouteName: 'App'}
  )

const styles = StyleSheet.create({
  bgputih: {
    backgroundColor: 'green',
    color: 'white',
  },

});


export default createAppContainer(Router);