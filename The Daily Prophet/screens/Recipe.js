import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class Recipe extends React.Component {
  render() {
    return (
     <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"lightgreen"}}> HOW TO MAKE POLYJUICE PORTION </Text>
        <Text> </Text>
        <Text style={styles.points}>
        <Image style={{width: 250, height: 250, marginLeft:450}}
        source={{ uri: 'https://thedailyprophet.net/wp-content/themes/yootheme/cache/how-to-make-polyjuice-potion-b71a6b8a.png', }} />
        
         <br/> Polyjuice Potion is an incredibly advanced and time consuming potion to brew, we’re confident you’ll be able to brew up your own batch of Polyjuice potion with this amazing recipe in about 5 minutes!
<br/> <br/>
        Polyjuice Potion Ingredients <br/>
1) 2 liters of lemon-lime soda <br/>
2) 2 liters of ginger ale <br/>
3) 28 oz Lime Sherbet <br/>
4) Green food coloring <br/>
5) Whipped Cream <br/>
<br/> <br/>
Polyjuice Potion Instructions <br/>
1) In a large cauldron (or punch bowl) scoop large dollops of lime sherbet <br/>
2) Gently pour equal amounts of lemon-lime soda and ginger ale <br/>
3) Check the color of your Polyjuice potion and add a few drops of green food coloring until it’s just the perfect shade of green <br/>
4) Pour your foamy delicious Polyjuice potion into a small potions bottle, or a punch glass <br/>
        </Text>

        <TouchableOpacity
              style={styles.buttons}
              onPress={() =>this.props.navigation.navigate('HomeScreen')}>
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
  points:{
    fontSize: 25
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