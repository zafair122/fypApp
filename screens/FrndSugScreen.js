import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import FileForSugFrnd from './TempFIleForSugFriend';

export default class MyFrndSugScreen extends Component {
  render() {
    return (
      <ScrollView>
        <FileForSugFrnd name="Zafair" />
        <FileForSugFrnd name="Zafair" />
        <FileForSugFrnd name="Zafair" />
        <FileForSugFrnd name="Zafair" />
        <FileForSugFrnd name="Zafair" />
        <FileForSugFrnd name="Zafair" />
        <FileForSugFrnd name="Zafair" />
        <FileForSugFrnd name="Zafair" />
      </ScrollView>
    );
  }
}
