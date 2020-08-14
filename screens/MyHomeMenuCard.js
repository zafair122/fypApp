import React from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default class MyHomeMenuCArd extends React.Component {
  AlertOption = () => {
    const {
      _id,
      categoryName,
      productDescription,
      productImage,
      productName,
      productPrice,
    } = this.props.item;

    Alert.alert(
      productName,
      productDescription,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );
  };

  render() {
    const {
      _id,
      categoryName,
      productDescription,
      productImage,
      productName,
      productPrice,
    } = this.props.item;
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
                    {productPrice} RS
                  </Paragraph>
                </View>
              </Card.Content>
              <Card.Content>
                <Paragraph>{productDescription}</Paragraph>
              </Card.Content>
            </View>
            <View></View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              padding: 10,
            }}
          >
            <Button
              mode="contained"
              style={styles.btnAdd}
              onPress={this.AlertOption}
            >
              Detail
            </Button>
            <Button
              mode="contained"
              style={styles.btnAdd}
              onPress={() => this.props.onAddToCartPress(this.props.item)}
            >
              Add to Cart
            </Button>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
