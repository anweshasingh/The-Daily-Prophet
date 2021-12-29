import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class News extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"lightcoral"}}> NEW SPELL IDENTIFIED BY VERONICA NASH, CURRENTLY BEING OBLIVIATED BY MINISTRY OF MAGIC FOR DISCOVERY! </Text>
        <Text> </Text>
        <Text style={styles.points}> 
        <Image style={{width: 250, height: 250, marginLeft:55}}
        source={{ uri: 'https://thedailyprophet.net/wp-content/themes/yootheme/cache/amy-weikel-the-daily-prophet-fdf5082a.jpeg', }} />
          
        
          <br/> By: Selevas Amagus <br/>

With every spell, enchantment and charm come responsibility from those who choose to cast it – especially when it comes to the likes of ancient magic. 
<br/> <br/>
In a recent update forwarded to The Prophet from the Ministry of Magic, a new spell has been identified through its accidental use.
<br/> <br/>
The witch accountable for stumbling upon the spell is none other than Veronica Nash, who was just recently featured in The Wizards Voice for her thought leadership on modern Wizarding Politics. The ministry reported that Veronica identified the spell while perusing the restricted section at Hogwarts School of Witchcraft and Wizardry on another personal assignment.
<br/> <br/>


<Text style={{ fontSize:30, backgroundColor:"lightcoral"}}>MAGICAL CREATURES OR NEW HEXES? MUGGLES CALLING IT COVID19 </Text>
<Text></Text>
        <Image style={{width: 250, height: 250, marginLeft:55}}
        source={{ uri: 'https://thedailyprophet.net/wp-content/themes/yootheme/cache/the-daily-prophet-covid19-1e05d3cc.jpeg', }} />

       
       <br/> By: Selevas Amagus <br/>

In a series of unprecedented events, one right after another, the Department of Mysteries and The Department of Magical Creatures have undergone a joint collaboration to understand what the muggle world has identified as COVID19.
<br/> <br/>
Interestingly enough, not a single Wizard or Witch has been known to contract what the World Health Organization has deemed a “Public Health Emergency of International Concern”. Regardless of it not affecting the magical community, the department of International Magical Cooperation has been following cases of the “virus” in muggles throughout multiple countries in an attempt to understand its pattern of contraction.
<br/> <br/>
Could a Wizard or Witch have conjured a hex that only affects muggles? Is a new, un-identified magical creature responsible for the novel disease muggles and no-majs are contracting? Why is our Wizarding community immune to this pandemic?
<br/> <br/>
Until then, Witches and Wizards, remember to keep your wands and broomsticks clean (Scourgify!) and stay out of sight of the Muggle community while we get to the bottom of this mysterious ailment.

        </Text>
        
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