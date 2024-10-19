import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from "./Cadastro";
import Login from "./Login";
import Tabs from './Tabs'

const Tab = createNativeStackNavigator();

export default function Rotas() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login } options={{headerShown:false}}/>
      <Tab.Screen name="Cadastro" component={Cadastro} options={{headerShown:false}}/>
      <Tab.Screen name="Tabs" component={Tabs} options={{headerShown:false}}/>
    </Tab.Navigator>
  );
}
