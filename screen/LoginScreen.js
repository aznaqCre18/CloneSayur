import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import Footers from '../components/Footers'


class LoginScreen extends Component {
  render() {
    return (
        <>
      <View style={{flexDirection: "column", justifyContent: "space-between"}}>
        <View style={{ flex: 1}}>
        <Image source={require("../assets/images/LoginPic.jpeg")} style={{width:"100%", height:150}}/>
        </View>
        <View style={{flex: 2, backgroundColor:"red"}}>
        <Text style={{top:180, left:20, fontSize:16, fontWeight:"bold"}}>
            Login untuk mempermudah anda melacak orders
        </Text>
        <Text style={styles.Text2}>
            Anda dapat melanjutkan belanja dengan login
        </Text>
        <Text style={styles.Text3}>
        menggunakan social media
        </Text>
        </View>
      </View>

       <View style={{marginTop: 602}}>
       <Footers />
     </View>
     </>
    )
  }
}

export default LoginScreen;


const styles = StyleSheet.create({

        Text2: {
        top:190,
        left:50,
        color :"#8395A7"
        },
        Text3: {
        top:190,
        left:110,
        color: "#8395A7"
    }

});