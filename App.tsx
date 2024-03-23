import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RandomButton from './src/components/button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Este aplicativo apresenta randomicamente histórias de mulheres incríveis que fizeram parte da tecnologia da informação.</Text>
      <RandomButton></RandomButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 100,
  },
  text: {
    textAlign: 'center',
    paddingBottom: 40
  }
});
