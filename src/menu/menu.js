import React from 'react';
import { Image, Alert, AsyncStorage, BackHandler, ScrollView } from 'react-native'

import  Constants  from 'expo-constants'


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


import firebase from '../config/firebase'

import icon from '../assets/images/icon.png'


export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      title: "Realtime",
      data: {},
      trip: true,
      citDet: true
    };
  }


async componentDidUpdate(){
      this.scRef.scrollTo({y: 0, x: 0, animated: false})
  if(this.props.main.state.search == true && this.state.trip == true){
    this.getHeader();
    //console.log('Menu')
  }

  if(this.props.main.state.cityDetail == true && this.props.main.state.cities == null && this.state.citDet == true){
    // console.log('hua ')
    this.setState({
      title: this.props.main.state.title,
      citDet: null
    })
  }

  if(this.props.main.state.cities == true && this.state.trip == true){
    this.setState({
      title: 'Cities',
      trip: null
    })
    //console.log('Menu')
  }
}

componentDidMount(){
    this.backKeyHandler();
}

backKeyHandler(){
    
  BackHandler.addEventListener('hardwareBackPress', () => {
    
    if (this.props.main.state.cityDetail == true) {
      this.props.main.setState({
        cities: true,
        cityDetail: null,
        title: "Cities"
      })
      this.setState({
        title: "Cities",
        citDet: true
      })  
      return true
    }
    if(this.props.main.state.search == true){
      this.props.main.setState({
        cities: true,
        search: null,
      })  
      this.setState({
        title: "Cities",
        citDet: true
      }) 
      return true
    }
    return false
  });
}


async getHeader(){
  this.setState({
    title: this.props.main.state.title,
    trip: null
  })
  this.setState({
    data: JSON.parse(await AsyncStorage.getItem('data'))
  }, () => {
    //console.log(this.state.data.city)
  })
}
  
openDrawer = () => {
    
    this._drawer._root.open();
}
  
  
  render() {

    const { main } = this.props;
    const { title } = this.state
    
    return (

        

          <Drawer type='displace' openDrawerOffset={0.15} 
            ref={(ref) => { this._drawer = ref; }}
            content={
              <List style={{ backgroundColor: 'black',
                paddingTop: Constants.statusBarHeight,}} >
                <ListItem  noIndent noBorder style={{
                  backgroundColor: 'black'
                }}>
                
                <Image source={icon} style={{height: 40, width: 40}}/>
                <Text style={{
                  color: 'white',
                  paddingLeft: 5
                }}>My Weather Monitoring System</Text>

                </ListItem>
              <ListItem  noIndent noBorder style={{ backgroundColor: main.state.realTime ? main.state.outlineColor : 'white' }} onPress={() => {
                  main.setState({
                    realTime: true,
                    sensorControl: null,
                    cities: null,
                    theme: null,
                    about: null,
                    cityDetail: null,
                    search: null
                  })
                  this.setState({
                      title: "Realtime",
                      trip: true
                  })
                  this._drawer._root.close();
              }}>
              <Text style={{color: main.state.realTime ? 'white' : 'black'}}>Realtime</Text>
              </ListItem>
              <ListItem  noIndent noBorder style={{ backgroundColor: main.state.sensorControl ? main.state.outlineColor : 'white' }} onPress={() => {
                  main.setState({
                    realTime: null,
                    sensorControl: true,
                    cities: null,
                    theme: null,
                    about: null,
                    cityDetail: null,
                    search: null
                  })
                  this.setState({
                    title: "Sensor Control",
                    trip: true
                })
                  this._drawer._root.close();
              }}>
                <Text style={{color: main.state.sensorControl ? 'white' : 'black'}}>Sensor Control</Text>
              </ListItem>
              <ListItem noIndent noBorder style={{ backgroundColor: main.state.cities ? main.state.outlineColor : 'white' }} onPress={() => {
                  main.setState({
                    realTime: null,
                    sensorControl: null,
                    cities: true,
                    theme: null,
                    about: null,
                    cityDetail: null,
                    search: null
                  })
                  this.setState({
                    title: "Cities",
                    trip: true
                })
                  this._drawer._root.close();
              }}>
                <Text style={{color: main.state.cities ? 'white' : 'black'}}>Cities</Text>
              </ListItem>
              <ListItem noIndent noBorder style={{ backgroundColor: main.state.theme ? main.state.outlineColor : 'white' }} onPress={() => {
                  main.setState({
                    realTime: null,
                    sensorControl: null,
                    cities: null,
                    about: null,
                    theme: true,
                    cityDetail: null,
                    search: null
                  })
                  this.setState({
                    title: "Theme",
                    trip: true
                })
                  this._drawer._root.close();
              }}>
                <Text style={{color: main.state.theme ? 'white' : 'black'}}>Theme</Text>
              </ListItem>
              <ListItem noIndent noBorder style={{ backgroundColor: main.state.about ? main.state.outlineColor : 'white' }} onPress={() => {
                  main.setState({
                    realTime: null,
                    sensorControl: null,
                    cities: null,
                    theme: null,
                    about: true,
                    cityDetail: null,
                    search: null
                  })
                  this.setState({
                    title: "About",
                    trip: true
                })
                  this._drawer._root.close();
              }}>
                <Text style={{color: main.state.about ? 'white' : 'black'}}>About</Text>
              </ListItem>
            </List>
            } >
                
    <Container  style={{ borderTopColor: main.state.menuBarColor,
                borderTopWidth: Constants.statusBarHeight,}}>
            
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
                      
                    {main.state.cities &&  <Button bordered style={{borderWidth: 2, borderColor: main.state.outlineColors}} onPress={() => {
                        main.setState({
                          realTime: null,
                          sensorControl: null,
                          cities: null,
                          theme: null,
                          about: null,
                          cityDetail: null,
                          search: true,
                          title: 'Search'
                        })
                        this.setState({
                          trip: true
                      })
                      }}>
                        <Icon name="add" color={main.state.outlineColor} />
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
                                onPress: () => {},
                                style: 'cancel',
                              },
                              { text: 'OK', onPress: async () => {

                               
                                  firebase.database().ref(`cities/${JSON.parse(await AsyncStorage.getItem('data')).cityKey}`).remove();
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
                 <ScrollView ref={ref => this.scRef = ref}>
                   {this.props.children}
                </ScrollView>
                </Container>

          </Drawer>
    
    
    );
  }
}

