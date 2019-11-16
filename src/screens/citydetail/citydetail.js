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

import { View, AsyncStorage } from 'react-native'




class Citydetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirm: false,
            data: '',
            cityData: '',
            load: false,
            list: [
                1,
                2,
                3,
                4,
                5,
                6
            ]
    };
  }


  async componentDidMount() {
        
        this.getData();
  }

  async getData() {
    this.setState({
        data: await JSON.parse(AsyncStorage.getItem('data')) 
    }, () => {
        this.setState({load: true})
        this.state.data.daily.data.length = 6
        this.state.data.hourly.data.length = 6
        console.log(this.state.data)

    })

}

  
  render() {

     const {data, load, list} = this.state;

    
    return (
            <View>
               
        <Tabs>
          <Tab heading="Current">
          <Card >
            <CardItem>
              <Left>
                
                <Body>
                  <Text></Text>
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