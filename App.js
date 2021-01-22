import * as React from 'react'
import {Text, TextInput, View, StyleSheet,Button} from 'react-native'
import {Header} from 'react-native-elements'
import localDB from './localDatabase'
import { TouchableOpacity } from 'react-native';

export default class App extends React.Component{

  constructor(){
    super();
    this.state={
      enteredTEXT: "",
      displayChunks: []
    }
  }

  render(){
    return(
      <View>

      <Header
      centerComponent={{text:"Reading Phonetics",style:{color:"black",fontSize:30}}}
      backgroundColor="#d8d3f8"> </Header>

      <TextInput onChangeText={(text)=>{
        this.setState({
          enteredTEXT:text
        })
      }}
      value={this.state.enteredTEXT}
      >

      </TextInput>

      <Button title="GO" onPress={()=>{
        this.setState({
          displayChunks: localDB[this.state.enteredTEXT].chunks
        })
        console.log(this.state.displayChunks)
      }}></Button>
<View>
      {this.state.displayChunks.map((item)=>{
          return(
            

            <Text>

              {item}

            </Text>
          )
      })}
</View>

      </View>
    )
  }

}
