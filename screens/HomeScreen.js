import React from "react";
import { View, Text, StyleSheet, Button, ImageBackground, ScrollView, TextInput } from "react-native";
import { Avatar, IconButton, Colors, Card, Title, Paragraph } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import MyHomeMenuCard from './MyHomeMenuCard';

export default class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: () => (
      <Ionicons name="md-home" size={25} color="#f4511e" />
    ),
  };

  render() {
    return (
      <View>
        {/* <MyHeader name="Search" /> */}
        <ScrollView>
          <MyHomeMenuCard />
          <MyHomeMenuCard />
          <MyHomeMenuCard />
          <MyHomeMenuCard />
          <MyHomeMenuCard />
          <MyHomeMenuCard />
          <MyHomeMenuCard />
          <MyHomeMenuCard />
          <MyHomeMenuCard />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: "0%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  mycard: {
    marginBottom: '10%',
    elevation: 9,
    backgroundColor: "#f4511e",
  }
});