import React from 'react';


import { View } from 'react-native'

import { Bars } from 'react-native-loader';

import Exximg from '../../assets/images/clear-day.png'

import tempIcon from '../../assets/images/temperature.png'

import Citycards from '../../components/Citycards'

import firebase from '../../config/firebase'

import moment from 'moment-timezone'


export default class Cities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      cityName: '',
      temperature: '',
      eximage: Exximg , 
      rdate:   '',
      searchList: '',
      citiesList: [],
      citiesName: [],
      citiesLength: '',
      load: false,
      searchLoad: true
    };
  }


  
  componentWillUnmount(){
      this.citiesData.off('child_added')
    this.citiesNumRef.off('value')
    
  }

  componentDidMount() {
    this.citiesNumRef = firebase.database().ref('cities')
    this.citiesNumRef.on("value", async snap => { 
      console.log(snap.numChildren())
      this.setState({
        citiesLength: snap.numChildren()
      }, () => {
        if(snap.numChildren() == 0){
          this.setState({
            load: true
          })
         
        }else{
          this.citiesData = firebase.database().ref('cities')
    this.citiesData.on("child_added", async snap => { 
  
   
    

    fetch(`https://api.darksky.net/forecast/6367f2bef0cb173051708856f4083433/${snap.val().lat},${snap.val().lng}?units=si`).then(fth => {
      fth.json().then(res => { 
        
        this.setState({
          citiesList: this.state.citiesList.concat({
            ...res, 
            city: snap.val().city, 
            cityKey: snap.key, 
            country: snap.val().country,
            timezoneOffset: snap.val().timezone
          })

        }, () => {
          
         
            this.setState({
              load: true
            })
          
        })

      })})
        
       
        

  })
        }
        
      })
    })
    

  }

  


  
  render() {
    
    const { cityName, temperature, eximage, rdate, citiesList, citiesLength, citiesName, load, searchLoad } = this.state
    const { main } = this.props;
    
    return load ?
            <View style={{
              backgroundColor: main.state.menuBarColor
            }}>
              
        {citiesList.map((snap,i )=> {
                   var targetTime = new Date(snap.currently.time * 1000)
                   var cDate = targetTime.toLocaleDateString('en-IN', {
                     timeZone: snap.timezone, 
                     dateStyle: 'short',
                       })

                       var cTime = targetTime.toLocaleTimeString('en-US', {
                         timeZone: snap.timezone, 
                         hour12: true,
                         timeStyle: 'short',
                           })
                           var t = moment(targetTime).tz(snap.timezone).format('h:mm a')

                           var d = moment(targetTime).tz(snap.timezone).format('DD/MM/YYYY')
                         
                    
                return <Citycards  key={i}
                data={snap} 
                city={snap.city} 
                country={snap.country} 
                tempIcon={tempIcon} 
                image={snap.currently.icon}  
                temp={Math.round(snap.currently.temperature)}  
                compositeTime={d + ' ' + t} 
                unit='&#8451;' 
                main={main} 
                />
             
           
           
             
          })}
              
            </View>    
            :
            <View style={{
              flex: 1,
              justifyContent: 'center',
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: 10
            }} >
              
              <Bars size={30} color={main.state.menuBarColor} />
              
            </View>
    
    
  }
}
