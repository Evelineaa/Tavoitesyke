import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [lower, setLower] = useState('');
  const [upper, setUpper] = useState('');
  const [age, setAge] =  useState('');

function calculate() {
  const resultUpper = (220-age) * 0.85;
  setUpper(resultUpper);

  const resultLower = (220-age) * 0.65;
  setLower(resultLower);

}

  return (
    <View style={styles.container}>
      <Text style = {styles.info}>Age</Text>
      <TextInput style = {styles.results}
      keyboardType='decimal-pad'
      value={age}
      onChangeText={text => setAge(text)}/>
      <Text style = {styles.info}>Limits</Text>
      <Text style = {styles.results}>{lower} - {upper}</Text>
      <Button style = {styles.button} onPress = {calculate} title = "Calculate"></Button>
      <StatusBar style="auto" />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  info: {
    fontSize: 25,
    margin: 15,
  },
  results: {
    left: 20,
    marginBottom: 10
  }
});
