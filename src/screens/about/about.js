import React from 'react';
import { 
    Container,
    Grid,
    Row,
    Col,
    
  } from 'native-base';

import { View, Image, Text } from 'react-native'

import logoname from '../../assets/images/mwms.jpg'
import logo from '../../assets/images/logo.png'


class About extends React.Component {
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
                  
                      
                    </Grid>
            </View>    
    
    
    );
  }
}

export default About;