import * as React from 'react';
import { styles } from '../utils/styles';
import { View, Text, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';

const HomeScreen = ({navigation}) => (
   <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 7}} variant="headlineLarge">🥝 Bem vindo ao TodoAppKiwi 🥝</Text>
      <View style={{ border: "1px solid #3F7550", paddingleft: "85%", paddingRight: "85%", marginBottom: 7}}></View>
      <Button
      mode='contained'
      textColor='black'
      onPress={() => {
         navigation.navigate("AddTaskScreen");
       }}
      style={{ backgroundColor:"#9CF5B6", color:"black"}}
      >Adicione algo ao Kiwi</Button>
   </View>
);

export default HomeScreen;