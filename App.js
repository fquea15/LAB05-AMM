import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity, Alert , Image} from 'react-native';
import React from 'react';
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react';

import Navigation from './Navigation';


const App = () => {

  const [selectedImage , setSelectedImage] = useState(null)


  let openImagePAsy = async () => {
    let permissionResult  = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if(permissionResult.granted === false){
      alert('Se rquiere permiso para acceder al equipo')
      return
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync()

    if(pickerResult.canceled === true){
      return
    }

    setSelectedImage({localUri: pickerResult.uri})




  }

  console.log(selectedImage)



  return (

    <Navigation></Navigation>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button:{
    backgroundColor: "blue",
    padding:7,
    marginTop:10,
  },

  btntxt:{
    color: "#fff",
    fontSize: 20,
  },

  image:{
    height: 200,
    width: 200 ,
    borderRadius: 100,
    resizeMode: 'contain'
  }
  
});

export default App
