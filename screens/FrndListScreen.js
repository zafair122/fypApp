import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import MYTempFileForFriend from './TempFileForFriend';


export default class MyFrndScreen extends Component {
    render() {
        return (
            <ScrollView>
                <MYTempFileForFriend name="zafair Mushtaq" Title="Expect" />
                <MYTempFileForFriend name="Ali Raza" />
                <MYTempFileForFriend name="Fatima Khan" />
                <MYTempFileForFriend name="Murtaza Ali" />
                <MYTempFileForFriend name="Anas Mir" />
                <MYTempFileForFriend name="Rabia Amjad" />
                <MYTempFileForFriend name="Ayesha Khan" />
                <MYTempFileForFriend name="Saad Rafiq" />
            </ScrollView>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paraText: {
        color: 'green'
    },
    btnAdd: {
        backgroundColor: '#f4511e',
        borderRadius: 40,
        opacity: 0.9,
    },
});
