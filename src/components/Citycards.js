import React from 'react';
import { 
   Card, CardItem, Text, Left, Body, Right
    
  } from 'native-base';

import { View, Image, AsyncStorage } from 'react-native'



export default class Citycards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        iconName: require('../assets/images/default.png')
    };
  }


  componentDidMount() {
        // console.log(this.props.image)
        switch (this.props.image) {
            case 'clear-day':
               // console.log('c day')
                this.setState({
                    iconName: require('../assets/images/clear-day.png')
                })
            break;
            case 'clear-night':
               // console.log('c N')
                this.setState({
                  iconName: require('../assets/images/clear-night.png')
              })
            break;
            case 'rain':
                //console.log('rain')
                this.setState({
                  iconName: require('../assets/images/rain.png')
              })
            break;
            case 'snow':
                //console.log('snow')
                this.setState({
                  iconName: require('../assets/images/snow.png')
              })
            break;
            case 'sleet':
                //console.log('sleet')
                this.setState({
                  iconName: require('../assets/images/sleet.png')
              })
            break;
            case 'wind':
                //console.log('wind')
                this.setState({
                  iconName: require('../assets/images/wind.png')
              })
            break;
            case 'rain':
                //console.log('rain')
                this.setState({
                  iconName: require('../assets/images/rain.png')
              })
            break;
            case 'fog':
                //console.log('fog')
                this.setState({
                  iconName: require('../assets/images/fog.png')
              })
            break;
            case 'cloudy':
                //console.log('cloudy')
                this.setState({
                  iconName: require('../assets/images/cloudy.png')
              })
            break;
            case 'partly-cloudy-day':
               // console.log('p c d')
                this.setState({
                  iconName: require('../assets/images/partly-cloudy-day.png')
              })
            break;
            case 'partly-cloudy-night':
                //console.log('p c n')
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
            console.log('Cities Card', city)
              await AsyncStorage.setItem('data', JSON.stringify(data));

              main.setState({
                title: city,
                cityDetail: true,
                cities: null, 
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
