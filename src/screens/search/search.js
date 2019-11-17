import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text, List, ListItem, Content } from 'native-base';
import { View, ScrollView } from 'react-native';

import firebase from '../../config/firebase'

import { Bars } from 'react-native-loader';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchQuery: '',
            searchList: null,
            load: true
        }
    }

    componentDidMount(){
        
    }

    async searchFunc(){
        const { searchQuery } = this.state;
        this.setState({
            load: false
        })
        let fth = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${searchQuery}&key=1ef2a51a49a748d1afd8e32f57c441d9`);
        let res = await fth.json();
        this.setState({
          searchList: res
        }, () => {
          this.setState({
            load: true
          })
        })
      }
  
      



  render() {

        const { load } = this.state;
        const { main } = this.props;
 
    return (
      <Container>
        <Header searchBar rounded style={{ backgroundColor: 'teal' }} >
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" onChangeText={(e) => {
                this.setState({
                    searchQuery: e
                })
                console.log(e)
            }}  onSubmitEditing={() => {
                    this.searchFunc()
            }}  selectTextOnFocus blurOnSubmit  />
            
          </Item>  
        </Header>
            
        { load ? 
                      <ScrollView>
                      
                        { this.state.searchList && this.state.searchList.results.length >= 1 && this.state.searchList.results.map((data, i) => { 
                                    console.log(data) 
                            

                                    
                                    return    <View>
                                      <List> 
                                        <ListItem noIndent key={data.geohash} onPress={() => {
                                 

          
                                    firebase.database().ref('cities').once("value", snap  => {
                                      if(snap.val() !== null){
                                        firebase.database().ref('cities').once("child_added", snap => {
                                        
                                          console.log(snap)
                                          if(snap.val().city !== data.components.city){
                                            firebase.database().ref('cities').push({
                                              lat: data.geometry.lat,
                                              lng: data.geometry.lng,
                                              city: data.components.city,
                                              country: data.components.country,
                                              formatted: data.formatted
                                            }, (err) => {
                                              if(err){
                          
                                              }else{
                                                main.setState({
                                                    realTime: null,
                                                    sensorControl: null,
                                                    cities: true,
                                                    about: null,
                                                    cityDetail: null,
                                                    historical: null, 
                                                    search: null
                                                  })
                                                  this.props.main.setState({
                                                    title: "Cities"
                                                })
                                              }
                                            })
                                          }else{
                                            console.log('city already')
                                          }
                                        })
                                      }else{
                          
                                        firebase.database().ref('cities').push({
                                          lat: data.geometry.lat,
                                          lng: data.geometry.lng,
                                          city: data.components.city,
                                          country: data.components.country,
                                          formatted: data.formatted
                                        }, (err) => {
                                          if(err){
                          
                                          }else{
                                            main.setState({
                                                realTime: null,
                                                sensorControl: null,
                                                cities: true,
                                                about: null,
                                                cityDetail: null,
                                                historical: null, 
                                                search: null
                                              })
                                              this.props.main.setState({
                                                title: "Cities"
                                            })
                                          }
                                        })
                          
                                      }
                                    })
                                      
                                    
                          
                          
                          
                                
                             }} >
                            <Text>{data.formatted}</Text>
                            </ListItem>
                        
                        </List>
                        
                        </View>
                      

                        })
            }
            </ScrollView>       
                        
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


      </Container>
    );
  }
}

export default Search;