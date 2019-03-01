import { createStackNavigator, createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail";
import SearchScreen from "../screens/Search";
import { headerStyles } from "./config";

const MainNavigation = createStackNavigator({
  Tabs: {
    screen: TabNavigation,
    navigationOptions: {
      header: null
    }},
    Detail: {
      screen: DetailScreen,
      navigationOptions: {
        ...headerStyles
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        ...headerStyles
      }
    }
},{
  headerMode: "screen",
  headerBackTitleVisible: false
})


export default createAppContainer(MainNavigation);