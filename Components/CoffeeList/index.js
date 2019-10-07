import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content } from "native-base";

//Components
import CoffeeItem from "./CoffeeItem";

// Data
import cafes from "../../data/cafes";

const CoffeeList = () => {
  let shops;
  if (cafes) {
    shops = cafes.map(cafe => <CoffeeItem cafe={cafe} key={cafe.id} />);
  }
  return (
    <Content>
      <List
        onPress={() =>
          props.navigation.navigate("CoffeeDetailScreen", {
            CoffeeID: oneItem.id
          })
        }
      >
        {shops}
      </List>
    </Content>
  );
};

export default observer(CoffeeList);
