import React from 'react';
import { AppLoading } from 'expo';

import { 
    Container,
    
    
  } from 'native-base';

import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';


import Menu from './src/menu/menu'

import Realtime from './src/screens/realtime/realtime'
import Sensorcontrol from './src/screens/sensorcontrol/sensorcontrol'
import Cities from './src/screens/cities/cities'
import Citydetail from './src/screens/citydetail/citydetail'
import Historical from './src/screens/historical/historical'
import About from './src/screens/about/about'
import Search from './src/screens/search/search'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        realTime: null,
        sensorControl: null,
        cities: null,
        about: null,
        cityDetail: null,
        historical: null,
        search: true,
        isReady: false,
    };
  }


  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  
  render() {

    const { realTime, sensorControl, cities, about, cityDetail, historical, search } = this.state;

    if (!this.state.isReady) {
      return <AppLoading />;
    }

    
    return (

    
            
              
              <Menu main={this} >
        {realTime && <Realtime main={this} />}
        {sensorControl && <Sensorcontrol main={this} />}
        {cities && <Cities main={this} />}
        {cityDetail && <Citydetail main={this} />}
        {historical && <Historical main={this} />}
        {about && <About main={this} />}
        {search && <Search main={this} />}
        
              </Menu>
            
    
    
    
    );
  }
}