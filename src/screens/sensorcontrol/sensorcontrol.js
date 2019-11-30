import React from 'react';
import { 
 ListItem, Text, Right, Body, Switch
    
  } from 'native-base';

import { View } from 'react-native'

import { Bars } from 'react-native-loader';

import firebase from '../../config/firebase'


export default class Sensorcontrol extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dht22: '',
      bmp180: '',
      ldr: '',
      load: false
    };
  }


  componentDidMount() {
    firebase.database().ref('sensor').on('value', (data) => {
      this.setState({
        dht22: data.val().dht22,
        bmp180: data.val().bmp180,
        ldr: data.val().ldr
      }, () => {
        this.setState({
          load: true
        })
      })
  })

  }

  
  render() {

    const { dht22, bmp180, ldr, load } = this.state
    const { main } = this.props
    
    return load ?  <View>
                <ListItem>
            <Body>
              <Text>DHT 22 (Temperature, Humidity, RealFeel)</Text>
              {<Text note>Status: {dht22 ? <Text note style={{color: 'green'}}>Online</Text> : <Text note style={{color: 'red'}}>Offline</Text>}</Text>}
            </Body>
            <Right>
              <Switch value={dht22} onValueChange={checked => {
                
                    this.setState({
                        dht22: !checked ? false : true
                    }, () => {
                        firebase.database().ref('/sensor/dht22').set(this.state.dht22)
                    })
      }} />
            </Right>
          </ListItem>
          <ListItem>
            <Body>
              <Text>BMP 180 (Air Pressure, Altitude)</Text>
              {<Text note>Status: {bmp180 ? <Text note style={{color: 'green'}}>Online</Text> : <Text note style={{color: 'red'}}>Offline</Text>}</Text>}
            </Body>
            <Right>
            <Switch value={bmp180} onValueChange={checked => {
                
                this.setState({
                    bmp180: !checked ? false : true
                }, () => {
                    firebase.database().ref('/sensor/bmp180').set(this.state.bmp180)
                })
  }} />
            </Right>
          </ListItem>
          <ListItem>
            <Body>
              <Text>LDR (Luminosity)</Text>
              {<Text note>Status: {ldr ? <Text note style={{color: 'green'}}>Online</Text> : <Text note style={{color: 'red'}}>Offline</Text>}</Text>}
            </Body>
            <Right>
            <Switch value={ldr} onValueChange={checked => {
                
                this.setState({
                    ldr: !checked ? false : true
                }, () => {
                    firebase.database().ref('/sensor/ldr').set(this.state.ldr)
                })
  }} />
            </Right>
          </ListItem>
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

