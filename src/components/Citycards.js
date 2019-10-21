import React from 'react';
import { 
    Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right
    
  } from 'native-base';

import { View, ActivityIndicator, Image } from 'react-native'






class Citycards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }


  componentDidMount() {

  }

  
  render() {

    const { title, temp, image, date, unit, main, data } = this.props

    return (
            <View>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={image} />
                <Body>
                  <Text>{title}</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
                <Left>
                    <Text>{temp}</Text>
                    <Text>{unit}</Text>
                </Left>
                
                <Right>
                
                </Right>

            </CardItem>
            <CardItem>
              <Left>
                
              </Left>
              <Body>
                
              </Body>
              <Right>
                <Text>{date}</Text>
              </Right>
            </CardItem>
          </Card>
            </View>    
    
    
    );
  }
}

export default Citycards;