import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import FileForNotiCard from './TempFileForNotiCard';

export default class MyFrndSugScreen extends Component {
  render() {
    return (
      <ScrollView>
        <FileForNotiCard name="Zafair" />
        <FileForNotiCard name="Zafair" />
        <FileForNotiCard name="Zafair" />
        <FileForNotiCard name="Zafair" />
        <FileForNotiCard name="Zafair" />
        <FileForNotiCard name="Zafair" />
        <FileForNotiCard name="Zafair" />
        <FileForNotiCard name="Zafair" />
      </ScrollView>
    );
  }
}
