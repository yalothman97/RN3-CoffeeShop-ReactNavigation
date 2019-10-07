import React, { Component } from "react";

// NativeBase Components
import { List, Content, Button, Icon } from "native-base";

//Components
import CoffeeItem from "./CoffeeItem";

// Data
import cafes from "../../data/cafes";

const CoffeeList = () => {
  const user = { name: "Yousef", description: "Coffee Addict" };
  return (
    <Content>
      <h1>Welcome {user.name} </h1>
    </Content>
  );
};

Profile.navigationOptions = ({ navigation }) => ({
  title: "Profile",
  headerLeft: null
});

export default CoffeeList;
