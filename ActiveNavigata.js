import React from 'react';
import {Text,Image, Linking,SafeAreaView, View, Pressable ,StyleSheet, Button, Alert, ActivityIndicator, ScrollView} from 'react-native';
import settingicon from './assets/settingt.png' 
import { TouchableOpacity } from 'react-native-gesture-handler';
import SplashScreen from './SplashScreen'
export default class Home extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  openSettingks=async ()=>{await Linking.openSettings()}

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
        <View style={{flex:1, marginRight:0, marginLeft: 380}}>
          <Pressable  ablePressable Opacity  onPress={this.openSettingks} >
           <Image source={settingicon} style={{height: 30, width:30, margin:0 ,top: 0, backgroundColor:'green'}} />
        </Pressable>
        </View>
     
      {/* <View style={styles.ActivityIndicator}>
        <ActivityIndicator  size="large" />
     </View>  */}

      <View style={{flex:2, justifyContent:'center', alignItems:'center'}}>
        <SplashScreen/>
      </View>

     </ScrollView>
      </SafeAreaView>
    );
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
  ActivityIndicator:{
    height: 280,
    backgroundColor:'skyblue',
    
  }
});
