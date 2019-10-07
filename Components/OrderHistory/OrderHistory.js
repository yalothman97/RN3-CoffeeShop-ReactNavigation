import React, { Component } from "react";

// NativeBase Components
import { List, Content, Button, Icon } from "native-base";

//Components
import CoffeeItem from "./CoffeeItem";

// Data
import cafes from "../../data/cafes";

const OrderHistory = () => {
  return (
    <Content>
      <p>Americano</p>
      <p>Cold Brew</p>
    </Content>
  );
};

OrderHistory.navigationOptions = ({ navigation }) => ({
  title: "Order History",
  headerLeft: null
});

export default CoffeeList;
