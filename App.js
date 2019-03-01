import React from 'react';
import { StatusBar } from "react-native"
import {AppLoading, Font, Asset} from "expo";
import Ionicons from "@expo/vector-icons";
import { StyleSheet, Text, View } from 'react-native';
import MainNavigation from "./navigation/MainNavigation";

export default class App extends React.Component {
  state = {
    loading: false
  }

  handleError = (error) => console.log(error);

  handleLoaded = () => this.setState({loaded: true});

  loadAssets = async() => {
    await Font.loadAsync({
      ...Ionicons.font
    });
    await Asset.loadAsync([
      require("./assets/icon.png")
    ]);
  }

  render() {
    const { loaded } = this.state;``
    if(loaded){
    return (
      <MainNavigation />
    )} else{
      return <><StatusBar barStyle="light-content" /><AppLoading startAsync={this.loadAssets} onFinish={this.handleLoaded} onError={this.handleError} /></>
    }
  }
}

