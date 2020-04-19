import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Button} from 'native-base';

import Footers from '../../components/Footers';

class LoginScreen extends Component {
  render() {
    return (
      <>
        <View style={{flex: 1}}>
          <Image
            source={require('../../assets/images/LoginPic.jpeg')}
            style={{width: '100%', height: 150}}
          />
          <Text style={styles.title}>
            Login untuk mempermudah anda melacak orders
          </Text>
          <Text style={styles.subtitle}>
            Anda dapat melanjutkan belanja dengan login menggunakan social media
          </Text>

          <Button style={styles.buttonF} bordered primary>
            <Text style={styles.textG}>Facebook</Text>
          </Button>

          <Button style={styles.buttonG} bordered danger>
            <Text style={styles.textG}>Google</Text>
          </Button>

          <Button style={styles.button} bordered success>
            <Text style={styles.text}>Masuk Dengan Email</Text>
          </Button>

          <Text style={styles.message}>
            We'll never post to Facebook or G+ without your permission.
          </Text>
          <Text style={styles.appVersion}>App Version 1.0.0</Text>
        </View>

        <View style={{marginTop: 602}}>
          <Footers />
        </View>
      </>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#566457',
    marginTop: 20,
  },
  subtitle: {
    textAlign: 'center',
    marginTop: 10,
    color: '#ABB2AB',
    marginBottom: 30,
  },
  text: {
    color: '#449C45',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  textG: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: '900',
    color: 'white',
  },
  button: {
    textAlign: 'center',
    marginTop: 10,
    width: 300,
    alignSelf: 'center',
    borderWidth: 20,
  },
  buttonG: {
    textAlign: 'center',
    marginTop: 10,
    width: 300,
    alignSelf: 'center',
    borderWidth: 20,
    backgroundColor: '#C40517',
  },
  buttonF: {
    textAlign: 'center',
    marginTop: 10,
    width: 300,
    alignSelf: 'center',
    borderWidth: 20,
    backgroundColor: '#2D4895',
  },
  message: {
    color: '#ABB2AB',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 10,
  },
  appVersion: {
    color: '#ABB2AB',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 16,
  },
});
