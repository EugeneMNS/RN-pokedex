import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {Main} from "./src/screens/Main";

export default function App() {
  return (
      <NavigationContainer>
        <View style={styles.container}>
          <Main/>
          <StatusBar style="auto"/>
        </View>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
