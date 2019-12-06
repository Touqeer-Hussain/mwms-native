import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Text, List, ListItem, Content, Right, Body } from 'native-base';
import { View, Alert } from 'react-native';

import firebase from '../../config/firebase'

import { Bars } from 'react-native-loader';

export default class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchQuery: '',
            searchList: null,
            load: true,
            citiesList: []
        }
    }

    componentDidMount(){
      this.citiesRef = firebase.database().ref('cities');
      this.citiesRef.on("child_added", async snap => { 
        if(snap.val()){
          this.setState({
            citiesList: this.state.citiesList.concat(snap.val())
          
          })
        }
      })  
    }

    componentWillUnmount(){
      this.citiesRef.off('child_added')
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
        <Header searchBar rounded style={{ backgroundColor: main.state.menuBarColor }} >
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" onChangeText={(e) => {
                this.setState({
                    searchQuery: e
                })
                
            }}  onSubmitEditing={() => {
                    this.searchFunc()
            }}  selectTextOnFocus blurOnSubmit  />
            
          </Item>  
        </Header>
            
        { load ? 
                      <Content>
                      
                                      <List>
                        { this.state.searchList && this.state.searchList.results.length >= 1 && this.state.searchList.results.map((data, i) => { 
                                    
                            
                                    return   data.confidence <= 5  && ( data.components.city || data.components.state ) && data.components.country && <ListItem key={data.annotations.geohash} onPress={() => {
                                 
                                        
                                      let cityFound = false;
                                      // console.log(this.state.citiesList.length)
          
                                      if(this.state.citiesList.length >= 1){
                          
                                        this.state.citiesList.filter((entry) => {
                                          if(entry.city == data.components.city || entry.city == data.components.state){
                                                
                                                cityFound = true
                                          }else{
                                              
                                          } 
                                          
                                        })
                          
                          
                                        if(!cityFound){
                                            firebase.database().ref('cities').push({
                                              lat: data.geometry.lat,
                                              lng: data.geometry.lng,
                                              city: data.components.city ? data.components.city : data.components.state,
                                              country: data.components.country,
                                              formatted: data.formatted,
                                              timezone: data.annotations.timezone.offset_string.substring(0, 3)
                                            }, (err) => {
                                              if(err){
                          
                                              }else{
                                                Alert.alert(
                                                  'City Added',
                                                    '',
                                                  [
                                                    
                                                    {text: 'OK', onPress: () => {
                                                        
                                                        main.setState({
                                                          cities: true,
                                                          search: null,
                                                          title: "Cities"
                                                      })
                                                    }},
                                                  ],
                                                  {cancelable: false},
                                                );
                                                
                                                
                                                
                                              }
                                            })
                                          }else{
                                            Alert.alert(
                                              'Duplicate!',
                                              'City already available',
                                              
                                              [
                                                
                                                {text: 'OK', onPress: () => {
                                                   }
                                              },
                                              ],
                                              {cancelable: false},
                                            );
                                            
                                          }
                            
                                      }else{
                          
                                        firebase.database().ref('cities').push({
                                          lat: data.geometry.lat,
                                          lng: data.geometry.lng,
                                          city: data.components.city ? data.components.city : data.components.state,
                                          country: data.components.country,
                                          formatted: data.formatted,
                                          timezone: data.annotations.timezone.offset_string
                                        }, (err) => {
                                          if(err){
                          
                                          }else{
                                            
                                            Alert.alert(
                                              'City Added',
                                                '',
                                              [
                                                
                                                {text: 'OK', onPress: () => {
                                                    
                                                    main.setState({
                                                      cities: true,
                                                      search: null,
                                                      title: "Cities"
                                                  })
                                                }},
                                              ],
                                              {cancelable: false},
                                            );
                                            

                                              
                                                    
                                            
                                          }
                                        })
                          
                                      }
                                                                
                                    
                          
                          
                          
                                
                             }}>
                               
                               <Body>
                              
                              <Text>{data.formatted}</Text>
                              <Text note>{data.components.city ? data.components.city : data.components.state}, {data.components.country}</Text>

                              </Body>
                              <Right>
                              <Icon name={'md-arrow-dropright'} />
                              </Right>
                            </ListItem> 
                        
                      

                        })
            }
            
            </List>
            </Content>        
                           
                        
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


      </Container>
    );
  }
}
