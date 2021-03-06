import React from 'react';
import { View } from 'react-native'

import { Bars } from 'react-native-loader';


import firebase from '../../config/firebase'


import Cards from '../../components/Cards'


import temperatureimage from '../../assets/images/temperature.png'
import humidityimage from '../../assets/images/humidity.png'
import airpressureimage from '../../assets/images/airpressure.png'
import realfeelimage from '../../assets/images/realfeel.png'
import luminosityimage from '../../assets/images/luminosity.png'
import altitudeimage from '../../assets/images/altitude.png'


export default class Realtime extends React.Component {
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
    const { main } =this.props;
    
    return  load ?  <View style={{
                        backgroundColor: main.state.menuBarColor
                   }}>
                <Cards title='Temperature' data={temperature} unit='&#8451;' image={temperatureimage} main={main} />
                <Cards title='Humidity' data={humidity} unit='%' image={humidityimage} main={main} />
                <Cards title='Air Pressure' data={airPressure} unit='hPa' image={airpressureimage} main={main} />
                <Cards title='Altitude' data={altitude} unit='m' image={altitudeimage} main={main} />
                <Cards title='Luminosity' data={lux} unit='lux' image={luminosityimage} main={main} />
                <Cards title='RealFeel' data={realFeel} unit='&#8451;' image={realfeelimage} main={main} />
            </View>    : 
            
            <View style={{
              flex: 1,
              justifyContent: 'center',
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: 10
            }} >
              
              <Bars size={30} color={main.state.menuBarColor} />
              
            </View>
    
  
  }
}

