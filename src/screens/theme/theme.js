import React from 'react';
import { 
    Container,
    Icon,
    Button,
    Text 
    
  } from 'native-base';

import { View } from 'react-native'





import { Bars } from 'react-native-loader';

import Exximg from '../../assets/images/fist.jpg'

import firebase from '../../config/firebase'

import ColorPalette from 'react-native-color-palette'

class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: true,
      colorList: [
        'red',	
        'pink',	
        'purple',	
        '#673AB7',	
        'indigo',
        'blue',
        '#03A9F4',
        'cyan',	
        'teal',	
        'green',	
        '#8BC34A',
        'lime',	
        'yellow',	
        '#FFC107',
        'orange',	
        '#FF5722',
        'brown',	
        'grey',	
        
        ]
      
    };
  }


  componentDidMount() {

  }

  componentWillUnmount(){

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

export default Theme;