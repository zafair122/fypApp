import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  ScrollView,
  TextInput,
  FlatList,
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
import { retrieveJwt, getUserId } from "../src/utils/localStorage";
import { postOrder } from "../src/services/orderService";
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

  onAddToCartPress = async (item) => {
    const {
      _id,
      categoryName,
      productDescription,
      productImage,
      productName,
      productPrice,
    } = item;
    let userId = await getUserId();
    console.log("user id => ", userId);
    let order = {
      productName: productName,
      quantity: 2,
      sendingAddress: "Gujrat",
      amount: productPrice,
    };
    console.log("orderObject object => ", order);
    postOrder(userId, order)
      .then(({ data }) => {
        alert("Successfully added");
        console.log("submit order response => ", data);
      })
      .catch((e) => console.log("submit order error => ", e));
  };

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

  renderItem = (item) => {
    return (
      <MyHomeMenuCard
        item={item}
        onAddToCartPress={(item) => this.onAddToCartPress(item)}
      />
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.products}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={(item) => item._id}
        />
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
