import React from 'react';
import { 
    Container,
    Header, 
    Title, 
    Content, 
    Button, 
    Icon, 
    Left,  
    Body, 
    Text, 
    Drawer, 
    View, 
    List, 
    ListItem,
    
  } from 'native-base';
import { Image, StatusBar, SafeAreaView } from 'react-native'

import  Constants  from 'expo-constants'

import icon from '../assets/images/icon.png'



class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      title: "Realtime"
    };
  }



  
openDrawer = () => {
    
    this._drawer._root.open();
}
  
  
  render() {

    const { main } = this.props;
    const { title } = this.state
    
console.log(Constants.statusBarHeight)
    return (

        

          <Drawer type='displace'   
            ref={(ref) => { this._drawer = ref; }}
            content={
              <List style={{marginTop: Constants.statusBarHeight}}>
                <ListItem>
                
                <Image source={icon} style={{height: 200, width: null, flex: 1}}/>

                </ListItem>
              <ListItem  style={{ backgroundColor: main.state.realTime ? '#94ffe6' : 'white' }} onPress={() => {
                  main.setState({
                    realTime: true,
                    sensorControl: null,
                    cities: null,
                    about: null,
                    cityDetail: null,
                    historical: null, 
                  })
                  this.setState({
                      title: "Realtime"
                  })
                  this._drawer._root.close();
              }}>
              <Text>Realtime</Text>
              </ListItem>
              <ListItem style={{ backgroundColor: main.state.sensorControl ? '#94ffe6' : 'white' }} onPress={() => {
                  main.setState({
                    realTime: null,
                    sensorControl: true,
                    cities: null,
                    about: null,
                    cityDetail: null,
                    historical: null, 
                  })
                  this.setState({
                    title: "Sensor Control"
                })
                  this._drawer._root.close();
              }}>
                <Text>Sensor Control</Text>
              </ListItem>
              <ListItem style={{ backgroundColor: main.state.cities ? '#94ffe6' : 'white' }} onPress={() => {
                  main.setState({
                    realTime: null,
                    sensorControl: null,
                    cities: true,
                    about: null,
                    cityDetail: null,
                    historical: null, 
                  })
                  this.setState({
                    title: "Cities"
                })
                  this._drawer._root.close();
              }}>
                <Text>Cities</Text>
              </ListItem>
              <ListItem style={{ backgroundColor: main.state.about ? '#94ffe6' : 'white' }} onPress={() => {
                  main.setState({
                    realTime: null,
                    sensorControl: null,
                    cities: null,
                    about: true,
                    cityDetail: null,
                    historical: null, 
                  })
                  this.setState({
                    title: "About"
                })
                  this._drawer._root.close();
              }}>
                <Text>About</Text>
              </ListItem>
            </List>
            } >
                
    <Container style={{marginTop: Constants.statusBarHeight}}>
            
                <Header style={{ backgroundColor: 'teal' }} >
                    
                    <Left>
                        <Button transparent onPress={this.openDrawer.bind(this)}>
                            <Icon  name='menu'  />
                        </Button>    
                    </Left>
                    <Body >
                    <Title style={{ color: '#FFF'}}>{title}</Title>
                    </Body>   
                </Header>
                 <Content>
                   {this.props.children}
                </Content>
                </Container>

          </Drawer>
    
    
    );
  }
}

export default Menu;