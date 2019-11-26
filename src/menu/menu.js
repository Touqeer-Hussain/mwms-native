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
    Right,
    
  } from 'native-base';
import { Image, Alert, AsyncStorage } from 'react-native'

import  Constants  from 'expo-constants'

import icon from '../assets/images/icon.png'

import firebase from '../config/firebase'

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      title: "Realtime",
      data: {},
      trip: true
    };
  }

async componentDidMount(){
  
  
}

componentDidUpdate(){
  
  if(this.props.main.state.search == true && this.state.trip == true){
    this.getHeader();
    console.log('Menu')
  }

  if(this.props.main.state.cityDetail == true && this.state.trip == true){
    this.getHeader();
    console.log('Menu')
  }

  if(this.props.main.state.cities == true && this.state.trip == true){
    this.setState({
      title: 'Cities',
      trip: null
    })
    console.log('Menu')
  }


    
}



async getHeader(){
  this.setState({
    title: this.props.main.state.title,
    trip: null
  })
  this.setState({
    data: JSON.parse(await AsyncStorage.getItem('data'))
  }, () => {
    console.log(this.state.data.city)
  })
}
  
openDrawer = () => {
    
    this._drawer._root.open();
}
  
  
  render() {

    const { main } = this.props;
    const { title } = this.state
    
    return (

        

          <Drawer type='displace'
            ref={(ref) => { this._drawer = ref; }}
            content={
              <List style={{marginTop: Constants.statusBarHeight}}>
                <ListItem>
                
                <Image source={icon} style={{height: 200, width: null, flex: 1}}/>

                </ListItem>
              <ListItem  style={{ backgroundColor: main.state.realTime ? main.state.outlineColor : 'white' }} onPress={() => {
                  main.setState({
                    realTime: true,
                    sensorControl: null,
                    cities: null,
                    theme: null,
                    about: null,
                    cityDetail: null,
                    historical: null, 
                    search: null
                  })
                  this.setState({
                      title: "Realtime",
                      trip: true
                  })
                  this._drawer._root.close();
              }}>
              <Text>Realtime</Text>
              </ListItem>
              <ListItem style={{ backgroundColor: main.state.sensorControl ? main.state.outlineColor : 'white' }} onPress={() => {
                  main.setState({
                    realTime: null,
                    sensorControl: true,
                    cities: null,
                    theme: null,
                    about: null,
                    cityDetail: null,
                    historical: null, 
                    search: null
                  })
                  this.setState({
                    title: "Sensor Control",
                    trip: true
                })
                  this._drawer._root.close();
              }}>
                <Text>Sensor Control</Text>
              </ListItem>
              <ListItem style={{ backgroundColor: main.state.cities ? main.state.outlineColor : 'white' }} onPress={() => {
                  main.setState({
                    realTime: null,
                    sensorControl: null,
                    cities: true,
                    theme: null,
                    about: null,
                    cityDetail: null,
                    historical: null, 
                    search: null
                  })
                  this.setState({
                    title: "Cities",
                    trip: true
                })
                  this._drawer._root.close();
              }}>
                <Text>Cities</Text>
              </ListItem>
              <ListItem style={{ backgroundColor: main.state.theme ? main.state.outlineColor : 'white' }} onPress={() => {
                  main.setState({
                    realTime: null,
                    sensorControl: null,
                    cities: null,
                    about: null,
                    theme: true,
                    cityDetail: null,
                    historical: null, 
                    search: null
                  })
                  this.setState({
                    title: "Theme",
                    trip: true
                })
                  this._drawer._root.close();
              }}>
                <Text>Theme</Text>
              </ListItem>
              <ListItem style={{ backgroundColor: main.state.about ? main.state.outlineColor : 'white' }} onPress={() => {
                  main.setState({
                    realTime: null,
                    sensorControl: null,
                    cities: null,
                    theme: null,
                    about: true,
                    cityDetail: null,
                    historical: null, 
                    search: null
                  })
                  this.setState({
                    title: "About",
                    trip: true
                })
                  this._drawer._root.close();
              }}>
                <Text>About</Text>
              </ListItem>
            </List>
            } >
                
    <Container style={{marginTop: Constants.statusBarHeight}}>
            
                <Header style={{ backgroundColor: main.state.menuBarColor }} >
                    
                    <Left>
                        <Button transparent onPress={this.openDrawer.bind(this)}>
                            <Icon  name='menu'  />
                        </Button>    
                    </Left>
                    <Body >
                    <Title style={{ color: '#FFF'}}>{title}</Title>
                    </Body>   
                    <Right>
                      
                    {main.state.cities &&  <Button style={{backgroundColor: main.state.outlineColors}} onPress={() => {
                        main.setState({
                          realTime: null,
                          sensorControl: null,
                          cities: null,
                          theme: null,
                          about: null,
                          cityDetail: null,
                          historical: null, 
                          search: true
                        })
                        this.setState({
                          title: "Search",
                          trip: true
                      })
                      }}>
                        <Icon name="add"/>
                      </Button>}
                      
                      {main.state.cityDetail &&   <View>
                        
                        <Button style={{backgroundColor: 'red'}} onPress={() => {
                          Alert.alert(
                            'Are you sure?',
                            'Do you realy want to delete this city?',
                            [
                              { },
                              {
                                text: 'Cancel',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel',
                              },
                              { text: 'OK', onPress: async () => {

                               
                                  firebase.database().ref(`cities/${this.state.data.cityKey}`).remove();
                                  
                                  main.setState({
                                            cityDetail: null,
                                            cities: true,
                                            
                                    })

                                  this.setState({
                                    title: 'Cities',
                                    trip: true
                                  })                                    
                        

                               
                                
                                          

                                  
                                    
                               }},
                            ],
                            { cancelable: false }
                          );
                          
                        
                      }}>
                        
                        <Icon name="trash"/>
                      </Button>
                        
                      </View>}
                    </Right>
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