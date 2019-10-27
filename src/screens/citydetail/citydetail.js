import React from 'react';
import { 
    Container,
    Text,
    Header,
    Tab,
    Tabs,
    Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right,
    List,
    ListItem
    
  } from 'native-base';

import Exximg from '../../assets/images/fist.jpg'

import { View } from 'react-native'




class Citydetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  async componentDidMount() {

  }

  
  render() {


    
    return (
            <View>
               
        <Tabs>
          <Tab heading="Current">
          <Card  onTouchEnd={async () => {
            console.log('Card Touched')
        await AsyncStorage.setItem('data', JSON.stringify(data))
        main.setState({
            cities: null,
            cityDetail: true
        })
          
         
        
      }}  >
            <CardItem>
              <Left>
                
                <Body>
                  <Text>Title</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
              <Body>

              </Body>
              <Right>
              <Thumbnail source={Exximg} />
              </Right>
            </CardItem>
            <CardItem cardBody>
                <Left>
                    <Text>Temp</Text>
                    <Text>Unit</Text>
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
                <Text>Date</Text>
              </Right>
            </CardItem>


            



          </Card>
          <List>
            <ListItem>
              <Left><Text>Simon Mignolet</Text></Left>
              <Right><Text>1000 hpa</Text></Right>
            </ListItem>
            <ListItem>
              <Left><Text>Simon Mignolet</Text></Left>
              <Right><Text>1000 hpa</Text></Right>
            </ListItem>
            <ListItem>
              <Left><Text>Simon Mignolet</Text></Left>
              <Right><Text>1000 hpa</Text></Right>
            </ListItem>
          </List>
          </Tab>
          <Tab heading="Hourly">
          <List>
            <ListItem>
              <Left><Text>Simon Mignolet</Text></Left>
              <Right><Text>^30C</Text><Text> </Text><Text><Text>^30C</Text></Text></Right>
            </ListItem>
            <ListItem>
              <Left><Text>Simon Mignolet</Text></Left>
              <Right><Text>1000 hpa</Text></Right>
            </ListItem>
            <ListItem>
              <Left><Text>Simon Mignolet</Text></Left>
              <Right><Text>1000 hpa</Text></Right>
            </ListItem>
          </List>
          </Tab>
          <Tab heading="Daily">
          <List>
            <ListItem>
              <Left><Text>Simon Mignolet</Text></Left>
              <Right><Text>^30C</Text><Text> </Text><Text><Text>^30C</Text></Text></Right>
            </ListItem>
            <ListItem>
              <Left><Text>Simon Mignolet</Text></Left>
              <Right><Text>1000 hpa</Text></Right>
            </ListItem>
            <ListItem>
              <Left><Text>Simon Mignolet</Text></Left>
              <Right><Text>1000 hpa</Text></Right>
            </ListItem>
          </List>
          </Tab>
        </Tabs>
            </View>    
    
    
    );
  }
}

export default Citydetail;