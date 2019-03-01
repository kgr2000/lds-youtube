import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
} from "react-navigation";
import HomeScreen from "../screens/Home";
import ListScreen from "../screens/List/";
import SettingScreen from "../screens/Setting";
import {
  BG_COLOR
} from "../constants/Colors";
import TabBarIcon from "../components/TabBarIcon";
import {createStack} from "./config"


const TabNavigation = createBottomTabNavigator({
  Home: {
    screen: createStack(HomeScreen, "Home"),
    navigationOptions: {
      tabBarIcon: ({focused}) => 
      (<TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-film" : "md-film"} />)
    } 
  },
  List: { 
    screen: createStack(ListScreen, "List"),
    navigationOptions: {
      tabBarIcon: ({focused}) => 
      (<TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-list-box" : "md-list-box"} />)
    } 
  },
  Setting: { 
    screen: createStack(SettingScreen, "Setting"),
    navigationOptions: {
      tabBarIcon: ({focused}) => 
      (<TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-settings" : "md-settings"} />)
    }
  }
}, {
  tabBarOptions: {
    showLabel: false,
    style: {
      backgroundColor: BG_COLOR
    }
  }
})

export default createAppContainer(TabNavigation);