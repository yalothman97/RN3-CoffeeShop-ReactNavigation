import { createAppContainer } from "react-navigation";
import StackNav from "./StackNav.js";
import BottomTab from "./BottomTabNav";

const AppContainer = createAppContainer(BottomTab);

export default AppContainer;
