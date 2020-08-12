import React from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default class MyHomeMenuCArd extends React.Component {
  AlertOption = () => {
    Alert.alert(
      "Dish Name",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat nisl id ultrices congue. Sed sollicitudin eu nisi a consectetur. Praesent ex leo, pharetra sit amet turpis eu, efficitur pharetra orci",
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
                <Title>Dish</Title>
                <View style={{ flexDirection: "row" }}>
                  <Paragraph style={styles.paraText}>Price</Paragraph>
                  <Paragraph style={styles.paraText} style={{ marginLeft: 10 }}>
                    200 RS
                  </Paragraph>
                </View>
              </Card.Content>
              <Card.Content>
                <Paragraph>Available Product Description</Paragraph>
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
            <Button mode="contained" style={styles.btnAdd}>
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
