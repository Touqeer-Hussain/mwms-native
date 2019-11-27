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


import { View, AsyncStorage, Image, ImageBackground, Dimensions } from 'react-native'

import { Bars } from 'react-native-loader';








class Citydetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            confirm: false,
            iconName: '',
            data: '',
            cityData: '',
            load: false,
            background: '',
            currentFontColor: '',
            tempIcon: '',
            humidity:'',
            airPressure: '',
            realFeel: '',
            windDirection: '',
            windSpeed: '',
            uvIndex: '',
            visibility: ''
    };
  }


  async componentDidMount() {
        
        this.getData();
        
  }

  async getData() {
     
    this.setState({
        data: JSON.parse(await AsyncStorage.getItem('data')) 
    }, () => {
      const { data } = this.state;

        this.setState({load: true})
        this.state.data.daily.data.length = 6
        this.state.data.hourly.data.length = 6

        if(data.currently.time >= data.daily.data[0].sunriseTime && data.currently.time <= data.daily.data[0].sunsetTime){
          this.setState({
              background: require('../../assets/images/day-background.png'),
              currentFontColor: 'black',
              tempIcon: require('../../assets/images/temperature.png'),
              humidity: require('../../assets/images/humidity.png'),
              airPressure: require('../../assets/images/airpressure.png'),
              realFeel: require('../../assets/images/realfeel.png'),
              windDirection: require('../../assets/images/wind-direction.png'),
              windSpeed: require('../../assets/images/wind-speed.png'),
              uvIndex: require('../../assets/images/uv-index.png'),
              visibility: require('../../assets/images/visibility.png')

          })
         }else{
          this.setState({
               background: require('../../assets/images/night-background.png'),
               currentFontColor: 'white',
               tempIcon: require('../../assets/images/temperature-white.png'), 
               humidity: require('../../assets/images/humidity-white.png'),
               airPressure: require('../../assets/images/airpressure-white.png'),
               realFeel: require('../../assets/images/realfeel-white.png'),
               windDirection: require('../../assets/images/wind-direction-white.png'),
               windSpeed: require('../../assets/images/wind-speed-white.png'),
               uvIndex: require('../../assets/images/uv-index-white.png'),
               visibility: require('../../assets/images/visibility-white.png')
           })
  }



    })

}

getPic(icon){
  switch (icon) {
    case 'clear-day':
        console.log('c day')

        
          return require('../../assets/images/clear-day.png')
       
        
    break;
    case 'clear-night':
        console.log('c N')
       
      return require('../../assets/images/clear-night.png')
    break;
    case 'rain':
        console.log('rain')
        
        return require('../../assets/images/rain.png')
      
    break;
    case 'snow':
        console.log('snow')
        
          return require('../../assets/images/snow.png')
   
    break;
    case 'sleet':
        console.log('sleet')
       
          return require('../../assets/images/sleet.png')
     
    break;
    case 'wind':
        console.log('wind')
      
        return require('../../assets/images/wind.png')
     
    break;
    case 'rain':
        console.log('rain')
        
          return require('../../assets/images/rain.png')
   
    break;
    case 'fog':
        console.log('fog')
        
        return require('../../assets/images/fog.png')
     
    break;
    case 'cloudy':
        console.log('cloudy')
        
          return require('../../assets/images/cloudy.png')
     
    break;
    case 'partly-cloudy-day':
        console.log('p c d')
        
          return require('../../assets/images/partly-cloudy-day.png')
      
    break;
    case 'partly-cloudy-night':
        console.log('p c n')
        
          return require('../../assets/images/partly-cloudy-night.png')
      
    break;

  default:
    break;
}
}

  
  render() {

     const {data, iconName, load, tempIcon, currentFontColor, background, 
      humidity, airPressure, realFeel, windDirection, windSpeed, uvIndex, visibility} = this.state;
     const { main } = this.props;

    
    return (
            load ? <View>
               
        <Tabs initialPage={2}>
          <Tab heading="Current"  
          tabStyle={{backgroundColor: main.state.outlineColor}} 
          activeTabStyle={{backgroundColor: main.state.outlineColor}}
          >
            <ImageBackground source={background} style={{width: '100%', height: '100%'}}>
              <Grid>
            <Row style={{
              paddingTop: 5,
            }}>
              <Col size={1}l style={{paddingTop: 25, paddingLeft: 10}}>
              <Image source={tempIcon} style={{height: 45, width: 20, }}/>  
              </Col>

              <Col size={6} style={{paddingLeft:0 }}>
            
            <Text style={{fontSize: 70, color: currentFontColor}}>{Math.round(data.currently.temperature)}<Text style={{fontSize: 30,}}>&#8451;</Text></Text>
            </Col>
            <Col size={7} style={{flex: 5}}>
            
            <Image source={this.getPic(this.state.data.currently.icon)} style={{height: 100, width: 103.17}}/>
            </Col>
            </Row>
            <Row style={{
              paddingTop: 60,
              paddingBottom: 10,
              borderBottomWidth: 0.5,
              borderBottomEndRadius: 20,
              borderBottomStartRadius: 20,
              borderBottomColor: 'white'
              }}>

            
                        <Col size={1} style={{paddingLeft: 10, paddingTop: 4}} >
                              <Image source={humidity} style={{height: 25, width: 25}}/>
                        </Col>

                        <Col size={6}>
                              <Text style= {{ fontSize:20, color: currentFontColor}}>Humidity</Text>          
                        </Col>

                        <Col size={-2}>
                              <Text style= {{fontSize: 23, color: currentFontColor}}>{data.currently.humidity.toString().split('.')[1]}</Text>
                        </Col>

                        <Col size={2}> 
                            <Text style= {{ color: currentFontColor, paddingTop: 7}}> &#37;</Text>        
                        </Col>
              
            </Row>
              
            <Row style={{
              paddingTop: 10,
              paddingBottom: 10,
              borderBottomWidth: 0.5,
              borderBottomEndRadius: 20,
              borderBottomStartRadius: 20,
              borderBottomColor: 'white'
              }}>

            
                        <Col size={1} style={{paddingLeft: 10, paddingTop: 4}} >
                              <Image source={airPressure} style={{height: 25, width: 25}}/>
                        </Col>

                        <Col size={6}>
                              <Text style= {{ fontSize:20, color: currentFontColor}}>Air Pressure</Text>          
                        </Col>

                        <Col size={-2}>
                              <Text style= {{fontSize: 23, color: currentFontColor}}>{Math.round(data.currently.pressure)}</Text>
                        </Col>

                        <Col size={2}> 
                            <Text style= {{ color: currentFontColor, paddingTop: 7}}> hPa</Text>        
                        </Col>
              
            </Row>

            <Row style={{
              paddingTop: 10,
              paddingBottom: 10,
              borderBottomWidth: 0.5,
              borderBottomEndRadius: 20,
              borderBottomStartRadius: 20,
              borderBottomColor: 'white'
              }}>

            
                        <Col size={1} style={{paddingLeft: 10, paddingTop: 4}} >
                              <Image source={realFeel } style={{height: 25, width: 25}}/>
                        </Col>

                        <Col size={6}>
                              <Text style= {{ fontSize:20, color: currentFontColor}}>Real Feel</Text>          
                        </Col>

                        <Col size={-2}>
                              <Text style= {{fontSize: 23, color: currentFontColor}}>{Math.round(data.currently.apparentTemperature)}</Text>
                        </Col>

                        <Col size={2}> 
                            <Text style= {{ color: currentFontColor, paddingTop: 7}}> &#8451;</Text>        
                        </Col>
              
            </Row> 
            <Row style={{
              paddingTop: 10,
              paddingBottom: 10,
              borderBottomWidth: 0.5,
              borderBottomEndRadius: 20,
              borderBottomStartRadius: 20,
              borderBottomColor: 'white'
              }}>

            
                        <Col size={1} style={{paddingLeft: 10, paddingTop: 4}} >
                              <Image source={windDirection} style={{height: 25, width: 25}}/>
                        </Col>

                        <Col size={6}>
                              <Text style= {{ fontSize:20, color: currentFontColor}}>Wind Direction</Text>          
                        </Col>

                        <Col size={-2}>
                              <Text style= {{fontSize: 23, color: currentFontColor}}>{data.currently.windBearing}</Text>
                        </Col>

                        <Col size={2}> 
                            <Text style= {{ color: currentFontColor, paddingTop: 7}}>&#176;</Text>        
                        </Col>
              
            </Row> 
            <Row style={{
              paddingTop: 10,
              paddingBottom: 10,
              borderBottomWidth: 0.5,
              borderBottomEndRadius: 20,
              borderBottomStartRadius: 20,
              borderBottomColor: 'white'
              }}>

            
                        <Col size={1} style={{paddingLeft: 10, paddingTop: 4}} >
                              <Image source={windSpeed} style={{height: 25, width: 25}}/>
                        </Col>

                        <Col size={6}>
                              <Text style= {{ fontSize:20, color: currentFontColor}}>Wind Speed</Text>          
                        </Col>

                        <Col size={-2}>
                              <Text style= {{fontSize: 23, color: currentFontColor}}>{data.currently.windSpeed}</Text>
                        </Col>

                        <Col size={2}> 
                            <Text style= {{ color: currentFontColor, paddingTop: 7}}> km/h</Text>        
                        </Col>
              
            </Row> 
            <Row style={{
              paddingTop: 10,
              paddingBottom: 10,
              borderBottomWidth: 0.5,
              borderBottomEndRadius: 20,
              borderBottomStartRadius: 20,
              borderBottomColor: 'white'
              }}>

            
                        <Col size={1} style={{paddingLeft: 10, paddingTop: 4}} >
                              <Image source={uvIndex} style={{height: 25, width: 25}}/>
                        </Col>

                        <Col size={6}>
                              <Text style= {{ fontSize:20, color: currentFontColor}}>UV Index</Text>          
                        </Col>

                        <Col size={-2}>
                              <Text style= {{fontSize: 23, color: currentFontColor}}>{data.currently.uvIndex}</Text>
                        </Col>

                        <Col size={2}> 
                            <Text style= {{ color: currentFontColor, paddingTop: 7}}> mW²/m</Text>        
                        </Col>
              
            </Row> 
            <Row style={{
              paddingTop: 10,
              paddingBottom: 10,
              borderBottomWidth: 0.5,
              borderBottomEndRadius: 20,
              borderBottomStartRadius: 20,
              borderBottomColor: 'white'
              }}>

            
                        <Col size={1} style={{paddingLeft: 10, paddingTop: 4}} >
                              <Image source={visibility} style={{height: 25, width: 25}}/>
                        </Col>

                        <Col size={6}>
                              <Text style= {{ fontSize:20, color: currentFontColor}}>Visibilty</Text>          
                        </Col>

                        <Col size={-2}>
                              <Text style= {{fontSize: 23, color: currentFontColor}}>{data.currently.visibility.toFixed(2)}</Text>
                        </Col>

                        <Col size={2}> 
                            <Text style= {{ color: currentFontColor, paddingTop: 7}}> km/h</Text>        
                        </Col>
              
            </Row>
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
          <Tab heading="Hourly"  
          tabStyle={{backgroundColor: main.state.outlineColor}} 
          activeTabStyle={{backgroundColor: main.state.outlineColor}}
          ><Grid>
             <ImageBackground source={background} style={{width: '100%', height:  Math.round(Dimensions.get('window').height)}}>
            {data.hourly.data.map((snap, i) => {                                                
                                                   
                                                    var targetTime = new Date(snap.time * 1000);
                                                    var timeZoneFromDB = parseInt(data.timezone); 
                                                    var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
                                                    var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000); 

                                                    var cTime = offsetTime.toLocaleTimeString().split(":");
                                                    var pTime = cTime[0] > 12 ? `${cTime[0] - 12}:${cTime[1]}` : `${cTime[0]}:${cTime[1]}`
                                                    var meridim = cTime[0] > 12 ? 'pm' : 'am'
                                                  
                                                    return (  <Row key={i} style={{
                                                      paddingTop: 15,
                                                      paddingBottom: 0,
                                                      borderBottomWidth: 0.5,
                                                      borderBottomEndRadius: 20,
                                                      borderBottomStartRadius: 20,
                                                      borderBottomColor: 'white'
                                                      }}>
                                                    
                                                                
                                        
                                                                <Col size={3}>
                                                                  <Text style= {{ fontSize:25, color: currentFontColor, paddingLeft: 13, paddingTop: 3}}>{pTime} {meridim}</Text>          
                                                                </Col>

                                                                <Col size={2}>
                                                                <Image source={this.getPic(snap.icon)} style={{height: 80, width: 82.54}}/>
                                                                </Col>

                                                                <Col size={-2}>
                                                                      <Text style= {{fontSize: 30, color: currentFontColor, paddingTop: 30}}>{Math.round(snap.temperature)}</Text>
                                                                </Col>
                                        
                                                                <Col size={1}> 
                                                                    <Text style= {{ fontSize: 20, color: currentFontColor, paddingTop: 40}}>&#8451;</Text>        
                                                                </Col>
                                                    </Row> 
                                                   )
            })}
          </ImageBackground>
          </Grid>
          </Tab>
          <Tab heading="Daily"
           tabStyle={{backgroundColor: main.state.outlineColor}} 
           activeTabStyle={{backgroundColor: main.state.outlineColor}}
           >
             <Grid>
             <ImageBackground source={background} style={{width: '100%', height: Math.round(Dimensions.get('window').height)}}>
            {data.daily.data.map((snap, i) => {                                                
                                                   
                                                    var targetTime = new Date(snap.time * 1000);
                                                    var timeZoneFromDB = parseInt(data.timezone); 
                                                    var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
                                                    var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000); 

                                                    var cDate = offsetTime.toLocaleDateString()

                                                   
                                                  
                                                    return (  <Row key={i} style={{
                                                      paddingTop: 25,
                                                      paddingBottom: 14,
                                                      borderBottomWidth: 0.5,
                                                      borderBottomEndRadius: 20,
                                                      borderBottomStartRadius: 20,
                                                      borderBottomColor: 'white'
                                                      }}>
                                                    

                                                            <Col size={1}>
                                                                  <Text style= {{ fontSize:22, color: currentFontColor, paddingLeft: 5}}>{cDate}</Text>          
                                                            </Col>

                                                            <Col size={1}>
                                                                <Image source={this.getPic(snap.icon)} style={{height: 70, width: 72.52}}/>
                                                            </Col>
                                                          
                                                            <Col size={0.6}>


                                                            <Row>
                                                               <Col size={-2}>
                                                                      <Text style= {{fontSize: 30, color: currentFontColor}}>↑{Math.round(snap.temperatureMax)}</Text>
                                                                </Col>
                                        
                                                                <Col size={-2}> 
                                                                    <Text style= {{ fontSize: 20, color: currentFontColor, paddingTop: 10}}> &#8451;</Text>        
                                                                </Col>
                                                               </Row>
                                                               <Row>
                                                               <Col size={-2}>
                                                                  
                                                                  <Text style= {{fontSize: 30, color: currentFontColor}}>↓{Math.round(snap.temperatureMin)}</Text>
                                                            </Col>
                                    
                                                            <Col size={1}> 
                                                                <Text style= {{ fontSize: 20, color: currentFontColor, paddingTop: 10}}> &#8451;</Text>        
                                                            </Col>
                                                               </Row>
                                                            </Col>
                                                                
                                                            
                                        
                                                                

                                                              

                                                               

                                                                
                                                    </Row> 
                                                   )
            })}
          
          </ImageBackground>
          </Grid>
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