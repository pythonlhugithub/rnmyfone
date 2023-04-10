import React from 'react';
import {Text, View, StyleSheet, Button, Alert, Image, ActivityIndicator, SafeAreaView } from 'react-native';
import imy from './assets/aio1.jpg';
import  AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from './Loader' 
export default class SplashScreen extends React.Component {
  constructor(navigation) {
    super();
    this.state = { animating: true, User_Id:''}; 
  }
  componentDidMount() {
  this.setUserid;   
  }
  setUserid=()=>{
  AsyncStorage.setItem('User_Id', JSON.stringify('addone'));
  }
  getuserid=()=>{
    AsyncStorage.getItem('User_Id').then((IdinStorage)=>{
     id= IdinStorage?IdinStorage:'';
     return id;
   });
   return id;
};
  removeItem = async(key)=>{ await AsyncStorage.removeItem(key);}
  render() {
   
    setTimeout(()=>{
       this.setState({animating:false})
     }, 2000);
    
      return (
       (this.getuserid='addone'?(
            <SafeAreaView style={styles.container}>
             <ActivityIndicator
            animating={this.state.animating}
            color="white"
            size="large"
            style={styles.activityIndicator}
          />

          {(this.state.animating?( 

          <View style={styles.welcome}>
                 <Image source={imy} style={{width: 300, height: 300, alignItems:'stretch'}} />
          </View>
         // <Loader />
          
          ):null)}


         

          {(!this.state.animating?(  // this is the user id exist landing page
             <View style={styles.welcome}>
                 <Text>this is the existing user id landing page</Text>
             </View> 
          ):null)}
           
         </SafeAreaView>
         
        ):(<SafeAreaView><View><Text>this is the login page</Text></View></SafeAreaView>))
         
        );

  

    this.removeItem('User_Id');
  
    console.log(id)
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
