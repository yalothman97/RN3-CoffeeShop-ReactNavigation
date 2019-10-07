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
    initialRouteName: "LoginScreen"
  }
);

export default StackNav;
