import React from 'react';
import { BackHandler } from 'react-native'

import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import firebase from './src/config/firebase'

import Menu from './src/menu/menu'

import Realtime from './src/screens/realtime/realtime'
import Sensorcontrol from './src/screens/sensorcontrol/sensorcontrol'
import Cities from './src/screens/cities/cities'
import Citydetail from './src/screens/citydetail/citydetail'
import Historical from './src/screens/historical/historical'
import About from './src/screens/about/about'
import Search from './src/screens/search/search'
import Theme from './src/screens/theme/theme'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        realTime: true,
        sensorControl: null,
        cities: null,
        about: null,
        cityDetail: null,
        theme: null,
        search: null,
        isReady: false,
        title: '',
        menuBarColor: '',
        outlineColor: ''
    };
  }


  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.themeRef =  firebase.database().ref('theme/mobile')
       this.themeRef.on('value', snap => {
          
          
          this.setState({
              menuBarColor: snap.val().menuBarColor,
              outlineColor:  snap.val().outlineColor,
              isReady: true
          })
        })
        
this.backKeyHandler();

        
  }

  backKeyHandler(){
    
    BackHandler.addEventListener('hardwareBackPress', () => {
      
      if (this.state.cityDetail == true) {
        this.setState({
          cities: true,
          cityDetail: null,
          title: 'Cities'
        })  
        return true
      }
      if(this.state.search == true){
        this.setState({
          cities: true,
          search: null,
          title: 'Cities'
        })  
        return true
      }
      return false
    });
  }

  componentWillUnmount(){
    this.themeRef.off('value')
}

  
  render() {

    const { realTime, sensorControl, cities, about, cityDetail, historical, search, theme } = this.state;

    if (!this.state.isReady) {
      return <AppLoading />;
    }

    
    return (

    
              
              <Menu main={this}>
               
        {realTime && <Realtime main={this} />}
        {sensorControl && <Sensorcontrol main={this} />}
        {cities && <Cities main={this} />}
        {cityDetail && <Citydetail main={this} />}
        {theme && <Theme main={this} />}
        {about && <About main={this} />}
        {search && <Search main={this} />}
        
              </Menu>
             
    
    );
  }
}