import { createStackNavigator } from "react-navigation-stack";

import CoffeeCart from "../Components/CoffeeCart";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeList from "../Components/CoffeeList";
import Login from "../Components/Login";

const StackNav = createStackNavigator(
  {
    CoffeeCartScreen: CoffeeCart,
    CoffeeDetailScreen: CoffeeDetail,
    CoffeeListScreen: CoffeeList,
    LoginScreen: Login
  },
  {
    initialRouteName: "LoginScreen",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20, 90, 100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default StackNav;
