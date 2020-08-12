import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Menu, Divider, Provider } from "react-native-paper";

const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button onPress={openMenu} style={styles.Menus}>
              Select you Option
            </Button>
          }
        >
          <Menu.Item onPress={() => {}} title="Dinning" />
          <Menu.Item onPress={() => {}} title="Take Away" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Delivery" />
        </Menu>
      </View>
      <View>
        <Text style={styles.para}>Your Order is Cash On Delivery</Text>
      </View>
      <Button
        icon="cart"
        mode="outlined"
        style={styles.btnOrder}
        onPress={() => console.log("Pressed")}
      >
        Place Order
      </Button>
    </Provider>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Menus: {
    backgroundColor: "#f4511e",
    color: "#ffffff",
    fontSize: 17,
    opacity: 0.9,
  },
  para: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 300,
  },
  btnOrder: {
    backgroundColor: "#f4511e",
    opacity: 0.9,
    marginTop: 50,
    width: "50%",
    marginLeft: 100,
  },
});
