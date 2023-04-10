
import React from 'react';
import {Text, View, StyleSheet, Button, Alert, Image,Modal, ActivityIndicator, SafeAreaView } from 'react-native';
import imy from './assets/aio1.jpg';

export default class Loader extends React.Component{
    constructor(props){
        super();
this.state={animating: true}
    }

    render(){
        return (

            <Modal visible={this.state.animating} transparent={true} animationType='none' onRequestClose={()=>{console.log('close modal')}}>    
            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                <ActivityIndicator
                    animating={true}
                    color="#000000"
                    size="large"
                    style={styles.activityIndicator}
                />
                </View>
      </View>
            </Modal>
        )
    }
}


const styles = StyleSheet.create({
    modalBackground: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor: '#00000040',
    },
    activityIndicatorWrapper: {
      backgroundColor: '#FFFFFF',
      height: 100,
      width: 100,
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    activityIndicator: {
      alignItems: 'center',
      height: 80,
    },
  });