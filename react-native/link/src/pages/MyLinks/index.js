import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function MyLinks() {
    return (
        <View style={styles.container}>
            <Text>Pagina Home</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontWeight: 500,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
