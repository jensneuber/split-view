// In App.js in a new project

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Detail from './src/screens/detail';
import Main from './src/screens/main';

function HomeScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={styles.box}>
        <Main navigation={navigation} route={route} />
      </View>
      <View style={styles.box}>
        <Detail />
      </View>
    </View>
  );
}

function Wetter({ navigation, route }) {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Text>Wetter</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: '50%',
    borderWidth: 1,
  },
});

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          presentation: 'modal',
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Wetter" component={Wetter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
