import styled from "styled-components/native";
import { Platform, StatusBar } from 'react-native';

export const ModalContainer = styled.view`
    flex:1;
    align-items:center;
    justify-content:center;
    height:45px;
    background-color:#FFF;
    margin:0 15px;
    border-radius:7px;
    margin-bottom:15px;
`;

export const Container = styled.view`
    flex:1;
    background-color:#FFF;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    padding: 0 15px;
`;

export const Header = styled.view`
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    margin:15px 0;
    background-color:#FFF;
    margin:0 15px;
    border-radius:7px;
    margin-bottom:15px;
`;