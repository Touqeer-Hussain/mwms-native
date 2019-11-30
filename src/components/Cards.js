import React from 'react';
import { 
   Card, CardItem, Thumbnail, Text, Left, Body, Right
    
  } from 'native-base';

import { View } from 'react-native'






export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }


  
  render() {

    const { title, data, unit, image, main } = this.props

    return (
            <View>
                    <Card >
                      <View style={{borderRadius: 0, borderWidth: 2, borderColor: main.state.outlineColor}} >
            <CardItem >
              <Left>
                
                <Body>
                  <Text  style={{
                      fontSize: 28
                  }} >{title}</Text>
                </Body>
              </Left>
              <Right>
              <Thumbnail source={image} square large/>
              </Right>
            </CardItem>
            
            <CardItem cardBody style={{
                alignContent: 'center',
                justifyContent: 'center'
            }}>
              <Text style={{
                      fontSize: 55,
                  }}
                  >{data}</Text>
                  <Text style={{
                      fontSize: 30,
                      
                  }} >
                  {unit}
                  </Text>
            </CardItem>
            <CardItem>
            
            </CardItem>
            </View>
          </Card>
            </View>    
    
    
    );
  }
}

