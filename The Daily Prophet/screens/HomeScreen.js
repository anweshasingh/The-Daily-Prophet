import React, { Component } from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import db from '../Config';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends Component {
constructor(){
  super();
  this.state={
    like:0,
    dislike:0
  }
}
likeCount=()=>{
  // add code here.
  this.setState({like:this.state.like+1});
}
dislikeCount=()=>{
  // add code here.
  this.setState({dislike:this.state.dislike+1});
}

  changeScreen = (screen)  => {
    this.props.navigation.navigate(screen);
  }
  render() {
    return(
      <View>
      <AppHeader />
      <View>
      <View style = {styles.viewStyle}>

        <TouchableOpacity style = {styles.buttonStyle} 
        onPress = {() => {this.changeScreen('News')}}>
          <Text style = {styles.textStyle}>Top News</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.buttonStyle}
         onPress = {() => {this.changeScreen('Recipe')}}>
          <Text style = {styles.textStyle}>Recipe of the day</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.buttonStyle} 
        onPress = {() => {this.changeScreen('Weather')}}>
          <Text style = {styles.textStyle}>Weather</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.buttonStyle} 
        onPress = {() => {this.changeScreen('JokeScreen')}}>
          <Text style = {styles.textStyle}>Memes</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center', margin:5 }}>Rate us</Text>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:20}}>
             <Text>{this.state.like}</Text>
             <Text>{this.state.dislike}</Text>
             </View>
            <TouchableOpacity onPress ={this.likeCount}>
           
              <Image
                style={{ width: 50, height: 50, marginLeft: 5 }}
                source={require('../assets/thumbs-up-hand-symbol.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress ={this.dislikeCount}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  marginTop: -35,
                  marginLeft: 100,
                }}
                source={require('../assets/thumbs-down-silhouette.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: "center"
  },
  buttonStyle: {
    borderWidth: 1,
    backgroundColor: 'coral',
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 40,
    borderRadius: 60,
    marginBottom: 40
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'times' 
    },

    ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },

  /*image1: {
    width: 50,
    height: 50,
    marginTop: -35,
    marginLeft: 100,
    marginRight:-30
  },
  image2: {
    width: 50,
    height: 50,
    marginLeft: -90
  }*/
});