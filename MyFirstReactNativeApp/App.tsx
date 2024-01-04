import { Icon, Button } from '@rneui/themed';
import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



function LoginField() {

  return (
    <View style={styles.loginMainView}>
      <View style={styles.loginField}>
        <TextInput placeholder='Your Email' placeholderTextColor={'#000'} style={styles.placeHolderTxt} />
      </View>

      <View style={styles.loginField2}>
        <TextInput placeholder='Your Password' placeholderTextColor={'#000'} style={styles.placeHolderTxt} />
      </View>
    </View>
  );
}

function SignInButton() {

  const buttonClickHandler = () => {

    console.log('You have been clicked');

  }

  return (

    <View style={styles.screen}>
      <TouchableOpacity onPress={buttonClickHandler} style={styles.roundButton1}>
        <Icon name='arrow-forward' type='ionicon' size={30} color={'white'} />
      </TouchableOpacity>
    </View>
  );

}

function App(): JSX.Element {

  return (
    <View style={styles.container}>
      <Image style={styles.img1} source={require('./assets/img/image1.jpg')}></Image>
      <Text style={styles.headtext}>{'Welcome Back'}</Text>
      <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
        <LoginField />
        <SignInButton />
      </KeyboardAwareScrollView>
    </View>

  );

}


//       <Icon name='arrow-forward' type='ionicon' size={30} color={'white'} style={styles.buttonIcon} />

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  img1: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },

  headtext: {
    fontSize: 45,
    color: 'black',
    fontWeight: '600',
    marginTop: 120,
    marginLeft: 20,
    paddingLeft: 45,
  },

  loginField: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: 70,
    marginHorizontal: 25,
    justifyContent: 'center',
    paddingLeft: 20,
  },

  loginField2: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: 70,
    marginHorizontal: 25,
    justifyContent: 'center',
    paddingLeft: 20,
    marginTop: 10,
  },

  placeHolderTxt: {
    fontSize: 18,
  },

  loginMainView: {
    marginTop: 250,
  },

  button: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',

  },

  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  roundButton1: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#000',
  },

})


export default App;
