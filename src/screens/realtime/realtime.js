import React from 'react';
import { 
    Container,
    Text
    
  } from 'native-base';

import { View } from 'react-native'

import firebase from '../../config/firebase'




class Realtime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }


  componentDidMount() {
        firebase.database().ref('current').once('value', snap =>{
          console.log(snap)
        })
  }

  
  render() {


    
    return (
            <View>
                    <Text>Realtime</Text>
            </View>    
    
    
    );
  }
}

export default Realtime;