import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import AppHeader from './components/AppHeader';
import HomeScreen from './screens/HomeScreen';
import JokeScreen from './screens/JokeScreen';
import Recipe from './screens/Recipe';
import Weather from './screens/Weather';
import News from './screens/News';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Container />
        <Text> MADE BY ANWESHA SINGH</Text>
      </View>
    );
  }
}

let Navigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  JokeScreen: JokeScreen,
  Recipe: Recipe,
  Weather: Weather,
  News: News,
});

const Container = createAppContainer(Navigator);
