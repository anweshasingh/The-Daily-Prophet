import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class JokeScreen extends React.Component {
  render() {
    return (
       <View style={styles.container}>
      
        <Text style={{ fontSize:30, backgroundColor:"lightblue"}}> ENJOY!! </Text>
        <Text> </Text>
   
        <Image style={{width: 250, height: 350, marginLeft:55}}
        source={{ uri: 'https://i.redd.it/oc41m3mgv9f61.jpg', }} />
          <Text></Text>
          <Image style={{width: 350, height: 550, marginLeft:55}}
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQ0xlPdMNAl4JYrnaK5bqbiTybmHcN6aemZFwEb-V3YJFyiR3s289Cy-qlqI-JaVTnOY&usqp=CAU', }} />
       
          <Image style={{width: 350, height: 350, marginLeft:55}}
        source={{ uri: 'https://i.pinimg.com/originals/a4/d2/db/a4d2db33943ff5b85f57633df9f140e9.png', }} />

        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:20, color:"white"}}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 20 
    },
  
    buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"black",
    margin: 10,
    width: 200,
    height: 50,
  }
})