import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import {
  createStackNavigator
} from "react-navigation";
import { BG_COLOR, TINT_COLOR } from "../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export const headerStyles = {
  headerStyle: {
    backgroundColor: BG_COLOR,
    borderBottomWidth: 0
  },
  headerTitleStyle: {
    color: TINT_COLOR
  },
  headerTintColor: TINT_COLOR
}
export const createStack = (screen, title) => createStackNavigator({
  Screen: {
    screen,
    navigationOptions: ({navigation}) => ({
      title,
      ...headerStyles,
      
      headerRight: <TouchableOpacity onPress ={() => navigation.navigate("Search")}><Ionicons name={Platform.OS === "ios" ? "ios-search" : "md-search"} size={25} style={{ marginRight:15, color: TINT_COLOR }} /></TouchableOpacity>
  })
}});
