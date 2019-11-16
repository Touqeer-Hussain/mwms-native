import React from 'react';
import { 
    Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right
    
  } from 'native-base';

import { View, ActivityIndicator, Image, AsyncStorage } from 'react-native'






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
          <Card  onTouchEnd={async () => {
            console.log('Card Touched')
            try {
              await AsyncStorage.setItem('data', JSON.stringify(data));
            } catch (error) {
              // Error saving data
            }
        main.setState({
            cities: null,
            cityDetail: true
        })
          
         
        
      }}  >
            <CardItem>
              <Left>
                
                <Body>
                  <Text>{title}</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
              <Body>

              </Body>
              <Right>
              <Thumbnail source={image} />
              </Right>
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