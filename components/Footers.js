import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
} from 'native-base';

import { Icon } from 'react-native-elements'

import {withNavigation} from 'react-navigation';

class Footers extends Component {
  render() {
    return (
      <Footer style={styles.bawahcuk}>
        <FooterTab style={styles.bgputih}>
          <Button
            vertical
            onPress={() => {
              this.props.navigation.navigate('App');
            }}>
            <Icon 
            name="shopping-basket"            
            type="font-awesome"
            />
            <Text>Shop</Text>
          </Button>
          <Button
            vertical
            onPress={() => {
              this.props.navigation.navigate('OrderScreen');
            }}>
                <Icon 
            name="receipt"            
            type="material-icons"
            />
            
            <Text>My Order</Text>
          </Button>
          <Button
            vertical
            onPress={() => {
              this.props.navigation.navigate('InboxScreen');
            }}>
            <Icon
             name='mail'
             type='feather'
             />
            <Text>Inbox</Text>
          </Button>
          <Button
            vertical
            onPress={() => {
              this.props.navigation.navigate('ChatScreen');
            }}>
            <Icon
             name="chat" 
             type="material-icons"        
             
            />
            <Text>Chat</Text>
          </Button>
          <Button
            vertical
            onPress={() => {
              this.props.navigation.navigate('LoginScreen');
            }}>
            <Icon 
            name="user" 
            type="feather"
            />
            <Text>Login</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

const styles = StyleSheet.create({
  bgputih: {
    backgroundColor: 'white',
    color: 'white',
  },

});

export default withNavigation(Footers);