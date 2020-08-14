import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, Image, FlatList } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { getMyOrders } from "../src/services/orderService";
import { retrieveJwt, getUserId } from "../src/utils/localStorage";
export default class MyOrderScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "My Order",
    drawerIcon: () => (
      <Ionicons name="md-restaurant" size={25} color="#f4511e" />
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
  }

  async componentDidMount() {
    let jwt = await retrieveJwt();
    if (jwt !== undefined && jwt !== null) {
      let userId = await getUserId();
      console.log("user id => ", userId);
      getMyOrders(userId)
        .then(({ data }) => {
          this.setState({ orders: data });
          console.log("getMyOrders response is => ", data);
        })
        .catch((e) => console.log("getMyOrders error => ", e));
    }
  }
  renderItem = (item) => {
    const { _id, amount, productName, sendingAddress } = item;
    return (
      <View style={{ margin: 5 }}>
        <Card style={{ elevation: 5 }}>
          <View style={{ flexDirection: "row", padding: 20 }}>
            {/* <View style={{ height: 80, width: 80, borderRadius: 40, backgroundColor: "#f4511e" }}></View> */}
            <Image
              source={require("./assets/sb0.jpg")}
              style={styles.logo}
              style={{ height: 100, width: 100, borderRadius: 10 }}
            />
            <View>
              <Card.Content>
                <Title>{productName}</Title>
                <View style={{ flexDirection: "row" }}>
                  <Paragraph style={styles.paraText}>Price</Paragraph>
                  <Paragraph style={styles.paraText} style={{ marginLeft: 10 }}>
                    {amount} RS
                  </Paragraph>
                </View>
              </Card.Content>
              <Card.Content>
                <Paragraph>{sendingAddress}</Paragraph>
              </Card.Content>
            </View>
          </View>
        </Card>
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.orders}
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
    alignItems: "center",
    justifyContent: "center",
  },
  paraText: {
    color: "green",
    fontSize: 17,
  },
  btnAdd: {
    backgroundColor: "#f4511e",
    borderRadius: 40,
    opacity: 0.9,
  },
});
