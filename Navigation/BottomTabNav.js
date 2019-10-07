import { createBottomTabNavigator } from "react-navigation-tabs";
import Login from "../Components/Login";
import CoffeeCart from "../Components/CoffeeCart";
import CoffeeList from "../Components/CoffeeList";
import StackNav from "./StackNav";

const BottomTabNav = createBottomTabNavigator({
  AuthTabScreen: StackNav,
  CoffeeCartScreen: CoffeeCart,
  OrdersTabScreen: CoffeeList
});

export default BottomTabNav;
