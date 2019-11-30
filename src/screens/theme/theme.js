import React from 'react';
import { 
    Icon,
    Text 
    
  } from 'native-base';

import { View } from 'react-native'

import ColorPalette from 'react-native-color-palette'
import { Bars } from 'react-native-loader';


import firebase from '../../config/firebase'


export default class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: true,
      colorList: [
        '#b71c1c',	
        '#880e4f',	
        '#4a148c',
        '#673ab7',	
        '#311b92',	
        '#3f51b5',	
        '#1a237e',
        '#2196f3',	
        '#1e88e5',	
        '#0d47a1',
        '#03a9f4',	
        '#01579b',
        '#00bcd4',	
        '#006064',
        '#009688',
        '#004d40',	
        '#1b5e20',
        '#bf360c',	
        '#3e2723',
        '#607d8b',	
        '#263238',
        '#424242',	
        '#212121',

        ]
      
    };
  }


 

  
  render() {
    
    const { load, colorList } = this.state;
    const { main } = this.props;

    
    return load ?
            <View style={{flex: 1}}>
                   <Text style={{fontSize: 25}}>Menu Bar Color: </Text>
                   <ColorPalette
                        onChange={color => {
                            firebase.database().ref('theme/mobile/menuBarColor').set(color)
                        }}
                        value={main.state.menuBarColor}
                        colors={colorList}
                        
                    icon={
                        <Icon name={'md-checkmark-circle'} size={25} color={'white'} />
                        // React-Native-Vector-Icons Example
                        }
                    />
                    <Text  style={{fontSize: 25}}>Outline Color:</Text>
                    <ColorPalette
                        onChange={color => {
                            firebase.database().ref('theme/mobile/outlineColor').set(color)
                        }}
                        value={main.state.outlineColor}
                        colors={colorList}
                  
                    icon={
                        <Icon name={'md-checkmark-circle'} size={25} color={'white'} />
                        // React-Native-Vector-Icons Example
                        }
                    />
            </View>
            :
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

