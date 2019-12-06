import React from 'react';
import { 
    Grid,
    Row,
    Col,
    Icon
    
  } from 'native-base';

import { View, Image, Text, Linking } from 'react-native'

import { Video } from 'expo-av'

import  Constants  from 'expo-constants'


import logoname from '../../assets/images/mwms.jpg'
import logo from '../../assets/images/logo.png'


export default class About extends React.Component {
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
                    <Grid>
                  
              <Row  style={{paddingTop: 30}} > 

                      <Col style={{alignItems: 'center'}} >
              

                              <Image  source={logo} style={{height: 200, width: 200}}/>
                      </Col>
              </Row>
              <Row style={{paddingTop: 20}} >  
                      <Col style={{alignItems: 'center'}}>
              
                              <Image  source={logoname} style={{height: 30, width: 343}}/>
                      </Col>

              </Row>
              <Row >
          <Video
                                source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/to-do-applica.appspot.com/o/FYP%20-%20Video%20.mp4?alt=media&token=1df4b763-d1bd-43ff-bb53-87b9dc1d21f5' }}
                                rate={1.0}
                                volume={1.0}
                                 isMuted={false}
                                resizeMode="contain"
                                shouldPlay
                                useNativeControls
                                isLooping
                                style={{ width: 360, height: 300, borderWidth: 2, borderColor: this.props.main.state.outlineColor }}
                />
          </Row>
          <Row style={{paddingTop: 40, paddingBottom: 10}} >  
                      <Col >
              
                              <Text style={{fontSize: 40}}>Introduction</Text>
                      </Col>

              </Row>
          <Col style={{borderWidth: 2, borderColor: this.props.main.state.outlineColor, margin: 5}}>
              <Row style={{padding: 12}}>
                    <Text style={{fontSize: 18}}>
                    The product My Weather Monitoring System (MWMS) is a Weather Monitoring Project which is IOT based Project. This system is too precisely, quickly and ease to show all information about weather.
                    </Text>
              </Row>
              <Row style={{padding: 12}}>
                    <Text style={{fontSize: 18}}>
                    The main motive of this project is to monitor environment/humidity/air pressure. It will help us to get the real-time readings on a small scale and give information about the coming weather throughout the day. It is easy to use and learns for everyone due to the friendly user interface.
                    </Text>
              </Row>
              <Row style={{padding: 12}}>
                    <Text style={{fontSize: 18}}>
                    In spite of this effective and eye-catching GUI for user’s system include very low cost hardware to give concurrent information about weather.  
                    </Text>
              </Row>
          </Col>
          <Row style={{paddingTop: 40, paddingBottom: 10}} >  
                      <Col >
              
                              <Text style={{fontSize: 40}}>Credit</Text>
                      </Col>

              </Row>

              <Col style={{borderWidth: 2, borderColor: this.props.main.state.outlineColor, margin: 5, alignItems: 'center'}}>
              <Row style={{paddingTop: 4}}>
                    <Text style={{fontSize: 24}}>
                        Supervisior:
                    </Text>

                   
              </Row>
              <Row style={{paddingTop: 2}}>
                    
                    <Text style={{fontSize: 18}}>
                        Ali Muhammad Amour
                    </Text>
              </Row>
              <Row style={{paddingTop: 2}}>
                    
              <Icon name="logo-github" style={{fontSize: 30}} onPress={ ()=>{ Linking.openURL('https://github.com/Touqeer-Hussain')}}/>
              <Icon name="logo-facebook"  style={{fontSize: 30, paddingLeft: 10, color: '#3578E5' }} onPress={ ()=>{ Linking.openURL('https://www.facebook.com/touqeerhussaintx')}}/>
              <Icon name="md-mail" style={{fontSize: 30, paddingLeft: 10, color: '#d93025'}}  onPress={ ()=>{ Linking.openURL('mailto:touqeerhussain@zoho.com')}}/>
              </Row>
              <Row style={{paddingTop:  20}}>
                    <Text style={{fontSize: 30}}>
                        Developer:
                    </Text>

                   
              </Row>
              <Row style={{paddingTop: 2}}>
                    
                    <Text style={{fontSize: 18}}>
                        Touqeer Hussain
                    </Text>
              </Row>
              <Row style={{paddingTop: 2}}>
                    
              <Icon name="logo-github" style={{fontSize: 30}} onPress={ ()=>{ Linking.openURL('https://github.com/Touqeer-Hussain')}}/>
              <Icon name="logo-facebook"  style={{fontSize: 30, paddingLeft: 10, color: '#3578E5' }} onPress={ ()=>{ Linking.openURL('https://www.facebook.com/touqeerhussaintx')}}/>
              <Icon name="md-mail" style={{fontSize: 30, paddingLeft: 10, color: '#d93025'}}  onPress={ ()=>{ Linking.openURL('mailto:touqeerhussain@zoho.com')}}/>
              </Row>
              <Row style={{paddingTop:  20}}>
                    <Text style={{fontSize: 24}}>
                        Designer:
                    </Text>

                   
              </Row>
              <Row style={{paddingTop: 2}}>
                    
                    <Text style={{fontSize: 18}}>
                        Muhammad Sajid Rajput
                    </Text>
              </Row>
              <Row style={{paddingTop: 2}}>
                    
              <Icon name="logo-github" style={{fontSize: 30}} onPress={ ()=>{ Linking.openURL('https://github.com/MxSAJIDxR')}}/>
              <Icon name="logo-facebook"  style={{fontSize: 30, paddingLeft: 10, color: '#3578E5' }} onPress={ ()=>{ Linking.openURL('https://www.facebook.com/MxSajidxR')}}/>
              <Icon name="md-mail" style={{fontSize: 30, paddingLeft: 10, color: '#d93025'}}  onPress={ ()=>{ Linking.openURL('mailto:www.sajidrajput666@gmail.com')}}/>
              </Row>
              <Row style={{paddingTop: 20}}>
                    <Text style={{fontSize: 24}}>
                        Writer:
                    </Text>

                   
              </Row>
              <Row style={{paddingTop: 2, paddingBottom: 10}}>
                    
                    <Text style={{fontSize: 18}}>
                        Syed Ejaz Hussain Shah
                    </Text>
              </Row>
              <Row style={{paddingTop: 2}}>
                    
              <Icon name="logo-github" style={{fontSize: 30}} onPress={ ()=>{ Linking.openURL('https://github.com/ejazshah')}}/>
              <Icon name="logo-facebook"  style={{fontSize: 30, paddingLeft: 10, color: '#3578E5' }} onPress={ ()=>{ Linking.openURL('https://www.facebook.com/ejaz.shah.927')}}/>
              <Icon name="md-mail" style={{fontSize: 30, paddingLeft: 10, color: '#d93025'}}  onPress={ ()=>{ Linking.openURL('mailto:ejazshah077@gmail.com')}}/>
              </Row>
          </Col>
                  
                      
                    </Grid>
                   
                    
            </View>    
    
    
    );
  }
}
