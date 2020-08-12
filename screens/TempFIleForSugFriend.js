import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

export default class FileForSugFrnd extends Component {
    render(props) {
        return (
            <View style={{ margin: 5 }}>
                <Card style={{ elevation: 5 }}>
                    <View style={{ flexDirection: "row", padding: 20 }}>
                        <Image source={require('./assets/p0.jpg')} style={styles.logo} style={{ height: 60, width: 60, borderRadius: 40, }} />
                        <View>
                            <Card.Content>
                                <Title>{this.props.name}</Title>
                                <Paragraph style={styles.paraText}>You have new friend Suggentions. People you may Know.</Paragraph>
                            </Card.Content>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-around", padding: 10 }}>
                        <Button mode="contained" style={styles.btnAdd}>Detail</Button>
                        <Button mode="contained" style={styles.btnAdd}>Follow</Button>
                    </View>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    paraText: {
        color: 'gray',
        width: '70%',
    },
    btnAdd: {
        backgroundColor: '#f4511e',
        borderRadius: 40,
        opacity: 0.9,
    },
})