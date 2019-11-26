import React from 'react';
import { 
    Container,
    Text,
    Header,
    Tab,
    Tabs,
    Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right,
    List,
    ListItem,
    Grid,
    Row,
    Col,
    
    
  } from 'native-base';


import { View, AsyncStorage, Image, ImageBackground } from 'react-native'

import { Bars } from 'react-native-loader';



import tempIcon from '../../assets/images/temperature.png'





class Citydetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            confirm: false,
            iconName: '',
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
        data: JSON.parse(await AsyncStorage.getItem('data')) 
    }, () => {
        this.setState({load: true})
        this.state.data.daily.data.length = 6
        this.state.data.hourly.data.length = 6
        console.log(this.state.data)
        switch (this.state.data.currently.icon) {
          case 'clear-day':
              console.log('c day')
              this.setState({
                  iconName: require('../../assets/images/clear-day.png')
              })
          break;
          case 'clear-night':
              console.log('c N')
              this.setState({
                iconName: require('../../assets/images/clear-night.png')
            })
          break;
          case 'rain':
              console.log('rain')
              this.setState({
                iconName: require('../../assets/images/rain.png')
            })
          break;
          case 'snow':
              console.log('snow')
              this.setState({
                iconName: require('../../assets/images/snow.png')
            })
          break;
          case 'sleet':
              console.log('sleet')
              this.setState({
                iconName: require('../../assets/images/sleet.png')
            })
          break;
          case 'wind':
              console.log('wind')
              this.setState({
                iconName: require('../../assets/images/wind.png')
            })
          break;
          case 'rain':
              console.log('rain')
              this.setState({
                iconName: require('../../assets/images/rain.png')
            })
          break;
          case 'fog':
              console.log('fog')
              this.setState({
                iconName: require('../../assets/images/fog.png')
            })
          break;
          case 'cloudy':
              console.log('cloudy')
              this.setState({
                iconName: require('../../assets/images/cloudy.png')
            })
          break;
          case 'partly-cloudy-day':
              console.log('p c d')
              this.setState({
                iconName: require('../../assets/images/partly-cloudy-day.png')
            })
          break;
          case 'partly-cloudy-night':
              console.log('p c n')
              this.setState({
                iconName: require('../../assets/images/partly-cloudy-night.png')
            })
          break;
      
        default:
          break;
      }


    })

}

  
  render() {

     const {data, iconName, load, list} = this.state;
     const { main } = this.props;

    
    return (
            load ? <View>
               
        <Tabs tabBarBackgroundColor='white'>
          <Tab heading="Current" tabStyle={{backgroundColor: main.state.outlineColor}} activeTabStyle={{backgroundColor: main.state.outlineColor}}>
            <ImageBackground source={require('../../assets/images/day-background.png')} style={{width: '100%', height: '100%'}}>
              <Grid>
            <Row>
              <Col size={1}l style={{paddingTop: 25, paddingLeft: 10}}>
              <Image source={tempIcon} style={{height: 45, width: 20, }}/>  
              </Col>

              <Col size={6} style={{paddingLeft:0 }}>
            
            <Text style={{fontSize: 70, color: 'black'}}>{Math.round(data.currently.temperature)}<Text style={{fontSize: 30,}}>&#8451;</Text></Text>
            </Col>
            <Col size={7} style={{flex: 5}}>
            
            <Image source={iconName} style={{height: 100, width: 103.17}}/>
            </Col>
            </Row>
            <Row style={{paddingTop: 80, paddingBottom: 10, borderBottomWidth: 0.5, borderBottomEndRadius: 20, borderBottomStartRadius: 20, borderBottomColor: 'white'}}>

              
                <Col size={1} style={{paddingLeft: 10, paddingTop: 4}} >
                <Image source={require('../../assets/images/visibility.png') } style={{height: 25, width: 25}}/>
                </Col>
                <Col size={6}>
                <Text style= {{ fontSize:22, color: 'black'}}>Visibilty</Text>          
                </Col>
                <Col size={-2}>
                <Text style= {{fontSize: 23, color: 'black'}}> {data.currently.visibility.toFixed(2)} </Text>
             </Col>
             
             <Col size={2}> 
               <Text style= {{ color: 'black', paddingTop: 7}}> km/h </Text>        
                </Col>
              
            </Row>
              
            <Row style={{paddingTop: 10}}>

              
                <Col size={1} style={{paddingLeft: 10, paddingTop: 4}} >
                <Image source={require('../../assets/images/visibility.png') } style={{height: 25, width: 25}}/>
                </Col>
                <Col size={6}>
                <Text style= {{ fontSize:22, color: 'black'}}>Visibilty</Text>          
                </Col>
                <Col size={-2}>
                <Text style= {{fontSize: 23, color: 'black'}}> {data.currently.visibility.toFixed(2)} </Text>
             </Col>
             
             <Col size={2}> 
               <Text style= {{ color: 'black', paddingTop: 7}}> km/h </Text>        
                </Col>
              
            </Row>



            <List>
            <ListItem avtar >
              <Left>
              <Image source={require('../../assets/images/visibility.png') } style={{height: 20, width: 20}}/>
                </Left>
              <Body>
              <Text style= {{ color: 'black'}}>Visibilty</Text>
                 </Body>
              <Right>
                
                <Text style= {{ color: 'black'}}> {data.currently.visibility.toFixed(2)} </Text>
                <Text> km/h </Text>
                </Right>
                
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

            </Grid>
            </ImageBackground>
          {/* <Card transparent>
            <ImageBackground  source={require('../../assets/images/day-background.png')} style={{borderRadius: 0, borderWidth: 2, borderColor: main.state.outlineColor}}>
          
          
            <CardItem cardBody>
                <Left>
                <Image source={tempIcon} style={{height: 50, width: 20, flex: 1, paddingLeft: 50}}/>  
                <Text style={{fontSize: 70}}>{Math.round(data.currently.temperature)}<Text style={{fontSize: 30}}>&#8451;</Text></Text>
                    
                </Left>
                <Body></Body>
                <Right style={{paddingRight: 30}}>
                <Image source={iconName} style={{height: 100, width: 103.17, flex: 1}}/>
                </Right>

            </CardItem>
            <CardItem>
                <Body>

                </Body>
                <Right>
                <Text>{new Date(data.currently.time * 1000).toDateString()}</Text>
                </Right>

            </CardItem>
            </ImageBackground>
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
          </List> */}
          </Tab>
          <Tab heading="Hourly" tabStyle={{backgroundColor: main.state.outlineColor}}>
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
          <Tab heading="Daily" tabStyle={{backgroundColor: main.state.outlineColor}}>
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
            </View>    : <View style={{
              flex: 1,
              justifyContent: 'center',
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: 10
            }} >
              
              <Bars size={30} color={main.state.menuBarColor} />
              
            </View>
    
    
    );

    
  }
}

export default Citydetail;