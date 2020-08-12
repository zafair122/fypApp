import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';


export default class MYTempFileForFriend extends Component {
    render(props) {
        return (
            <View style={{ margin: 5 }}>
                <Card style={{ elevation: 5 }}>
                    <View style={{ flexDirection: "row", padding: 20 }}>
                        <Image source={require('./assets/p0.jpg')} style={styles.logo} style={{ height: 60, width: 60, borderRadius: 40, }} />
                        <View>
                            <Card.Content>
                                <Title>{this.props.name}</Title>
                                <Paragraph style={styles.paraText}>Expect nothing less than perfact.</Paragraph>
                            </Card.Content>
                        </View>
                    </View>
                </Card>
            </View>
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
        color: 'gray'
    },
    btnAdd: {
        backgroundColor: '#f4511e',
        borderRadius: 40,
        opacity: 0.9,
    },
});
