import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function MainScreen({ navigation, route }) {
  const { uuid } = route?.params ?? {};

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={styles.box}>
        {[...Array(10).keys()].map(n => {
          return (
            <Pressable
              key={`link${n}`}
              style={styles.button}
              onPress={() => {
                console.log({ n });
                navigation.navigate('Home', { uuid: n });
                navigation.navigate('Detail', { uuid: n });
              }}>
              <Text style={{ fontSize: 40 }}>{n}</Text>
              {n === uuid ? <Text>active</Text> : null}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#FFcccc',
    flex: 1,
    borderWidth: 1,
  },
  button: {
    height: 100,
    backgroundColor: 'gray',
    borderWidth: 1,
  },
});
export default MainScreen;
