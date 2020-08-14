import { Ionicons } from "@expo/vector-icons";
import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import p from "./assets/p1.jpg";
import { getUserId, retrieveJwt } from "../src/utils/localStorage";
import { getProfile } from "../src/services/userService";

export default class MyAccountScreen extends Component {
  static navigationOptions = {
    drawerLabel: "My Account",
    drawerIcon: () => <Ionicons name="md-contact" size={25} color="#f4511e" />,
  };

  constructor(props) {
    super(props);
    this.state = { user: {} };
  }

  async componentDidMount() {
    let jwt = await retrieveJwt();
    if (jwt !== undefined && jwt !== null) {
      let userId = await getUserId();
      getProfile(userId)
        .then(({ data }) => {
          this.setState({ user: data });
          console.log("getMyProfile response is => ", data);
        })
        .catch((e) => console.log("getMyOrders error => ", e));
    }
  }

  render() {
    const { name, email, mobile, address } = this.state.user;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header} />
        <Image style={styles.avatar} source={p} />

        <View style={styles.bodyContent}>
          <Text style={styles.name}>{name ? name : ""}</Text>
          <Text style={styles.info}>{email ? email : ""}</Text>
          <Text style={styles.info}>{mobile ? mobile : ""}</Text>
          <Text style={styles.description}>{address ? address : ""}</Text>

          <TouchableOpacity style={styles.buttonContainer}>
            <Text>Edit Profile</Text>
          </TouchableOpacity>
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
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
    marginTop: 40,
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
