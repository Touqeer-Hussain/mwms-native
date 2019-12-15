import React from 'react';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import firebase from './src/config/firebase'

import Menu from './src/menu/menu'

import Realtime from './src/screens/realtime/realtime'
import Sensorcontrol from './src/screens/sensorcontrol/sensorcontrol'
import Cities from './src/screens/cities/cities'
import Citydetail from './src/screens/citydetail/citydetail'
import About from './src/screens/about/about'
import Search from './src/screens/search/search'
import Theme from './src/screens/theme/theme'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        realTime: null,
        sensorControl: null,
        cities: null,
        about: null,
        cityDetail: null,
        theme: null,
        search: true,
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
        

        
  }

  

  componentWillUnmount(){
    this.themeRef.off('value')
}

  
  render() {

    const { realTime, sensorControl, cities, about, cityDetail, search, theme } = this.state;

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