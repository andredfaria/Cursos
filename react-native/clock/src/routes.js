import { React } from "react";
import { CreateDrawerNavigation } from "@react-navigation/drawer";

import Home from './pages/Home';
import Search from './pages/Search';

const Drawer = CreateDrawerNavigation();

function Routes() {
  return (
    <Drawer.Navigation>
      <Drawer.Screen
        name='Home'
        component={Home}
      />

      <Drawer.Screen
        name='Search'
        component={Search}
      />
      
    </Drawer.Navigation>
  )
}

export default Routes;