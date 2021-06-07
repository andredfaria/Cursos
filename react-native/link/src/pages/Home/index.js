import StatusBarPage from "../../components/statusBarPages";
import React from 'react';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Text } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Menu from "../../components/Menu";

import { Feather } from "@expo/vector-icons";

import { useState } from "react";

import {
    ContainerLogo, ContainerContent, Logo,
    SubTitle, Title, ContentInput, Input,
    BoxIcon, ButtonLink
} from './styles';


export default function Home() {

    const [input, setInput] = useState('')

    function shortLink(param) {
        alert('URL digirada ' + input)
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() }>
            <LinearGradient
                colors={['#1ddbb9', '#132742']}
                style={{ flex: 1, justifyContent: 'center' }}>
                
                <StatusBarPage
                    barStyle="light-content"
                    backgroundColor="#1ddbb9"
                />

                <Menu />

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'android' ? 'padding' : 'position'}
                    enabled
                >

                    <ContainerLogo>
                        <Logo source={require('../../assets/Logo.png')} resizeMode="contain"/>
                    </ContainerLogo>
                    
                    <ContainerContent>
                        <Title>Link</Title>
                        <SubTitle>Cole seu link aqui</SubTitle>

                        <ContentInput>
                            <BoxIcon>
                                <Feather name="link" size={22} color="#FFF" />
                            </BoxIcon>

                            <Input
                                placeholder="Seu link"
                                placeholderTextColor="white"
                                autoCorrect={false}
                                autoCapitalize='none'
                                KeyboardType="url"
                                value={input}
                                onChangeText={(text) => setInput(text)}
                            />
                        </ContentInput>

                        <ButtonLink onPress={ () => shortLink() }>
                            <Text>Gerar Link</Text>
                        </ButtonLink>

                    </ContainerContent>
                </KeyboardAvoidingView>

            </LinearGradient>
        </TouchableWithoutFeedback>
    );
}
