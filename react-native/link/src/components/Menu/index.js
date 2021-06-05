import React from 'react';
import { Text } from 'react-native';
import { ButtonMenu } from "./style";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/core';


export default function Menu() {
    const navigation = useNavigation();

    return (
        <ButtonMenu onPress={ () => navigation.openDrawer() }>
            <Feather name="menu" size={ 40 } color="#fff"/>
        </ButtonMenu>
    );
}
