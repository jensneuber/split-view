import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

function DetailScreen({ navigation, route }) {
  console.log({ route });
  const { uuid } = route?.params ?? {};

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={[styles.box, { backgroundColor: '#ffcccc' }]}>
        <Pressable
          onPress={() => {
            navigation.navigate('Home', { uuid: 20 });
            navigation.navigate('Detail', { uuid: 20 });
          }}>
          <Text style={{ fontSize: 40 }}>LINK</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('Home', { uuid: 20 });
            navigation.navigate('More', { uuid: 20 });
          }}>
          <Text style={{ fontSize: 40 }}>LINK Modal</Text>
        </Pressable>

        <Text style={{ fontSize: 40 }}>Aktuelle Seite: {uuid}</Text>

        <Pressable
          onPress={() => {
            navigation.navigate('Wetter', { uuid: 20 });
          }}>
          <Text style={{ fontSize: 40 }}>Wetter</Text>
        </Pressable>
      </View>
    </View>
  );
}

function More({ navigation, route }) {
  console.log({ route });
  const { uuid } = route?.params ?? {};

  return (
    <View style={{ flex: 1, flexDirection: 'row', padding: 0 }}>
      <View style={[styles.box, { backgroundColor: '#ccffcc' }]}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={{ fontSize: 40 }}>close</Text>
        </Pressable>
        <Text style={{ fontSize: 40 }}>{uuid}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    borderWidth: 1,
  },
});

const Detail = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: 'containedTransparentModal',
        gestureEnabled: true,
        animation: 'default',
      }}>
      <Stack.Screen component={DetailScreen} name="Detail" />
      <Stack.Screen
        component={More}
        name="More"
        options={{
          title: 'test',
          headerShown: false,
          contentStyle: {
            flex: 1,
            paddingTop: 10,
            backgroundColor: 'rgba(0,0,0,0.6)',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Detail;
