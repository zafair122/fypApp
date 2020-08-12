import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from 'react-native-paper';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default class MyPrivacyPolScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Privacy',
    drawerIcon: () => (
      <MaterialIcons name="monetization-on" size={25} color="#f4511e" />
    ),
  };

  render() {
    return (
      <View style={styles.btnView}>
        <View>
          <TouchableOpacity style={styles.btnLogin}>
            <Button onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={styles.textLogin}>Privacy & Policy</Text>
            </Button>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btnLogin}>
            <Button onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={styles.textLogin}>FAQs</Text>
            </Button>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btnView: {
    alignItems: 'flex-start',
    marginTop: 10,
  }
});