import React from 'react';
import { 
    Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right
    
  } from 'native-base';

import { View, ActivityIndicator, Image } from 'react-native'






class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }


  componentDidMount() {

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
                  {/* <Text note>GeekyAnts</Text> */}
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

export default Cards;