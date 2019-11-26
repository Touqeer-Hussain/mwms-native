import React from 'react';
import { 
    Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right
    
  } from 'native-base';

import { View, ActivityIndicator, Image, AsyncStorage } from 'react-native'

// import clearDay from '../assets/images/clear-day.png'
// import clearNight from '../assets/images/clear-night.png'
// import rain from '../assets/images/rain.png'
// import snow from '../assets/images/snow.png'
// import sleet from '../assets/images/sleet.png'
// import wind from '../assets/images/wind.png'
// import fog from '../assets/images/fog.png'
// import cloudy from '../assets/images/cloudy.png'
// import partylCloudyDay from '../assets/images/partly-cloudy-day.png'
// import partylCloudyNight from '../assets/images/partly-cloudy-night.png'





class Citycards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        iconName: ''
    };
  }


  componentDidMount() {
        console.log(this.props.image)
        switch (this.props.image) {
            case 'clear-day':
                console.log('c day')
                this.setState({
                    iconName: require('../assets/images/clear-day.png')
                })
            break;
            case 'clear-night':
                console.log('c N')
                this.setState({
                  iconName: require('../assets/images/clear-night.png')
              })
            break;
            case 'rain':
                console.log('rain')
                this.setState({
                  iconName: require('../assets/images/rain.png')
              })
            break;
            case 'snow':
                console.log('snow')
                this.setState({
                  iconName: require('../assets/images/snow.png')
              })
            break;
            case 'sleet':
                console.log('sleet')
                this.setState({
                  iconName: require('../assets/images/sleet.png')
              })
            break;
            case 'wind':
                console.log('wind')
                this.setState({
                  iconName: require('../assets/images/wind.png')
              })
            break;
            case 'rain':
                console.log('rain')
                this.setState({
                  iconName: require('../assets/images/rain.png')
              })
            break;
            case 'fog':
                console.log('fog')
                this.setState({
                  iconName: require('../assets/images/fog.png')
              })
            break;
            case 'cloudy':
                console.log('cloudy')
                this.setState({
                  iconName: require('../assets/images/cloudy.png')
              })
            break;
            case 'partly-cloudy-day':
                console.log('p c d')
                this.setState({
                  iconName: require('../assets/images/partly-cloudy-day.png')
              })
            break;
            case 'partly-cloudy-night':
                console.log('p c n')
                this.setState({
                  iconName: require('../assets/images/partly-cloudy-night.png')
              })
            break;
        
          default:
            break;
        }
  }

  
  render() {


    const { city, country, tempIcon, temp, date, unit, main, data } = this.props
    
    return (
            <View>
          <Card  onTouchEnd={async () => {
            console.log('Card Touched')
            try {
              await AsyncStorage.setItem('data', JSON.stringify(data));
            } catch (error) {
              // Error saving data
            }
        main.setState({
            cities: null,
            cityDetail: true,
            title: data.city
        })
          
         
        
      }}  ><View style={{borderRadius: 0, borderWidth: 2, borderColor: main.state.outlineColor}}>
            <CardItem>
              <Left>
                
              
                  <Text style={{fontSize: 35}}>{city}</Text>
                  <Text style={{fontSize: 20}} note>{country}</Text>
                  
                
              </Left>
              
            </CardItem>
          
            <CardItem cardBody>
                <Left>
                <Image source={tempIcon} style={{height: 50, width: 20, flex: 1, paddingLeft: 50}}/>  
                <Text style={{fontSize: 60}}>{temp}<Text style={{fontSize: 30}}>{unit}</Text></Text>
                    
                </Left>
                <Body></Body>
                <Right style={{paddingRight: 30}}>
                <Image source={this.state.iconName} style={{height: 80, width: 82.54, flex: 1}}/>
                </Right>

            </CardItem>
            <CardItem>
                <Body>

                </Body>
                <Right>
                <Text>{date}</Text>
                </Right>

            </CardItem>
            </View>
          </Card>
            </View>    
    
    
    );
  }
}

export default Citycards;