import React from 'react';
import { 
    Container,
    Text
    
  } from 'native-base';

import { View } from 'react-native'

import { Bars } from 'react-native-loader';

import Exximg from '../../assets/images/fist.jpg'

import Citycards from '../../components/Citycards'

import firebase from '../../config/firebase'


class Cities extends React.Component {
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


  componentDidMount() {
    firebase.database().ref('cities').once("value", async snap => { 
      this.setState({
        citiesLength: snap.numChildren()
      })
    })

  firebase.database().ref('cities').on("child_added", async snap => { 
  
   
    

    fetch(`https://api.darksky.net/forecast/04eaa61891ba6ace0154c6b2b6ce1c60/${snap.val().lat},${snap.val().lng}?units=si`).then(fth => {
      fth.json().then(res => { 
        
        this.setState({
          citiesList: this.state.citiesList.concat({...res, "city": snap.val().city, cityKey: snap.key})
         
        }, () => {
          this.setState({
            load: true
          })
        })

      })})
        
       
        

  })

  }

  componentWillUnmount(){
    firebase.database().ref('cities').off();
  }
  


  
  render() {
    
    const { cityName, temperature, eximage, rdate, main, citiesList, citiesLength, citiesName, load, searchLoad } = this.state

    
    return load ?
            <View>
        {citiesLength == citiesList.length ?  citiesList.map((snap,i )=> {
                    
                    
                return <Citycards data={snap} image={Exximg} title={snap.city} temp={Math.round(snap.currently.temperature)}  date={new Date(snap.currently.time * 1000).toDateString()} unit='&#8451;' main={this.props.main} key={i}/>
             
           
           
             
          }) : <Text></Text>}
              
            </View>    
            :
            <View style={{
              flex: 1,
              justifyContent: 'center',
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: 10
            }} >
              
              <Bars size={30} color="teal" />
              
            </View>
    
    
  }
}

export default Cities;