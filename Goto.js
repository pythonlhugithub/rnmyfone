import React from 'react';
import {Text, View, StyleSheet, Button, Alert, Image, ActivityIndicator, SafeAreaView } from 'react-native';
import imy from './assets/aio1.jpg';
import  AsyncStorage from '@react-native-async-storage/async-storage'

export default class Goto extends React.Component{
    render (){
        return (
             <SafeAreaView style={styles.container}>
                <View style={styles.welcome}>
                <Text>this is go to page for testing </Text>
                </View>
            </SafeAreaView>
        )
    }
}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
  
    ActivityIndicator: {height: 80, backgroundcolor: 'red'}
  });
  