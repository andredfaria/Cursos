import React from 'react';
import { Text, View } from 'react-native';
import StatusBarPage from '../../components/statusBarPages';

export default function MyLinks() {
    return (
        <View>

            <StatusBarPage
                barStyle="light-content"
                backgroundColor="#132742"
            />

            <Text>Pagina Links</Text>
        </View>
    );
}
