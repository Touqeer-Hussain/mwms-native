import React from 'react';
import { 
    Container,
    Text,
    Grid,
    Row,
    Col,
    
  } from 'native-base';

import { View } from 'react-native'




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
                  
              <Row size={3} style={{backgroundColor: 'red'}}> 
              <View></View>
              
              </Row>
              <Row size={1}>  
              </Row>
                  
                      
                    </Grid>
            </View>    
    
    
    );
  }
}

export default About;