import { Ionicons } from "@expo/vector-icons";
import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import p from "./assets/p1.jpg";

export default class MyAccountScreen extends Component {
  static navigationOptions = {
    drawerLabel: "My Account",
    drawerIcon: () => <Ionicons name="md-contact" size={25} color="#f4511e" />,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Image style={styles.avatar} source={p} />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>Zafair Mushtaq</Text>
            <Text style={styles.info}>zafairmushtaq122@gmail.com</Text>
            <Text style={styles.info}>+92 3049610062</Text>
            <Text style={styles.description}>Gujrat, Punjab, Pakistan</Text>

            <TouchableOpacity style={styles.buttonContainer}>
              <Text>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f77c56",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#f4511e",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 100,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#f77c56",
  },
});
