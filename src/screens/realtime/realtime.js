import React from 'react';
import { 
    Container,
    Text
    
  } from 'native-base';

import { View, ActivityIndicator } from 'react-native'

import firebase from '../../config/firebase'
import Cards from '../../components/Cards'

import { Bars } from 'react-native-loader';

import temperatureimage from '../../assets/images/temperature.png'
import humidityimage from '../../assets/images/humidity.png'
import airpressureimage from '../../assets/images/airpressure.png'
import realfeelimage from '../../assets/images/realfeel.png'
import luminosityimage from '../../assets/images/luminosity.png'
import altitudeimage from '../../assets/images/altitude.png'


class Realtime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      humidity: '',
      lux: '',
      realFeel: '',
      airPressure: '',
      altitude: '',
      load: false         
    };
  }


  componentDidMount() {
    firebase.database().ref('current').on('value', data =>{
      this.setState({
          temperature: Math.round(data.val().temperature),
          humidity: Math.round(data.val().humidity),
          lux: data.val().lux,
          realFeel: Math.round(data.val().realFeel),
          airPressure: data.val().airPressure,
          altitude: Math.round(data.val().altitude)
        }, () => {
          this.setState({
            load: true
          })
        })
      })
  }

  
  render() {

    const { temperature, humidity, lux, realFeel, airPressure, altitude, load } = this.state;
    
    return  load ?  <View>
                <Cards title='Temperature' data={temperature} unit='&#8451;' image={temperatureimage}/>
                <Cards title='Humidity' data={humidity} unit='%' image={humidityimage}/>
                <Cards title='Air Pressure' data={airPressure} unit='hPa' image={airpressureimage}/>
                <Cards title='Altitude' data={altitude} unit='m' image={altitudeimage}/>
                <Cards title='Luminosity' data={lux} unit='lux' image={luminosityimage}/>
                <Cards title='RealFeel' data={realFeel} unit='&#8451;' image={realfeelimage}/>
            </View>    : 
            
            <View style={{
              flex: 1,
              justifyContent: 'center',
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: 10
            }} >
              
              <Bars size={30} color="teal" />
              
            </View>
    
  
  }
}

export default Realtime;