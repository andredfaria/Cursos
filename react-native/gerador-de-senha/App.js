import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Slider from '@react-native-community/slider';
import Clipboard from 'expo-clipboard';

export default function App() {
  const [password, setPassword] = useState();
  const [sizePassword, setSizePassword] = useState(10);

  let carset = 'abcdefghijklmnopqrstuvwxyz'

  function generationPass() {
    let pass = '';
    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.randon() * n))      
    }

    setPassword(pass)
  }

  function copyPass() {
    Clipboard.setSting(password)
    alert('senha copiada');
  }

  return (
    <View style={styles.container}>
      <Image
        source={'./src/assets/logo.png'}
        style={styles.logo}
      />

      <Text style={styles.text}> {sizePassword } caracteres</Text>
      <View></View>

      <Slider
        style={{ height: 50 }}
        minimumValue={5}
        maximumValue={10}
        value={sizePassword}
        minimumTrackTintColor="#f00"
        maximumTrackTintColor="#000"
        onValueChange={(value) => setSizePassword(value.toFixed(0))}
      />

      <TouchableOpacity style={styles.button} onPress={generationPass}>
        <Text style={styles.text}>Gerar Senha</Text>
      </TouchableOpacity>
      {password !== '' &&
        <View>
          <Text onLongPress={ copyPass } style={styles.password}>{password}</Text>
        </View>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 60,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 15,
    margin: 15,
    borderRadius: 7,
    backgroundColor: '#fff',
    width: '90%'
  },
  button:{
    backgroundColor: '#ffa200',
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginBottom: 25,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  password: {
    padding: 10,
    textAlign: 'center'
    
  }
});
