import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  ScrollView,
  TextInput,
} from "react-native";
import {
  Avatar,
  IconButton,
  Colors,
  Card,
  Title,
  Paragraph,
} from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import MyHomeMenuCard from "./MyHomeMenuCard";
import { getProducts } from "../src/services/productService";
import http from "../src/services/httpService";
import { retrieveJwt } from "../src/utils/localStorage";
export default class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: () => <Ionicons name="md-home" size={25} color="#f4511e" />,
  };

  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  async componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts = async () => {
    let jwt = await retrieveJwt();
    if (jwt !== undefined && jwt !== null) {
      http.setJwt(jwt);
    }
    getProducts()
      .then(({ data }) => {
        console.log("getProducts response => ", data);
        this.setState({ products: data });
      })
      .catch((e) => console.log("getProducts error => ", e));
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
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: "0%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  mycard: {
    marginBottom: "10%",
    elevation: 9,
    backgroundColor: "#f4511e",
  },
});
