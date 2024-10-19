import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'

import  Principal  from './Principal';
import Consultas from "./Consultas";
import Perfil from "./Perfil";
import Explorar from "./Explorar";
import { Component } from "react";

const Tab = createBottomTabNavigator ()
const screenOptions =(
    {
        tabBarStyle: {
            backgroundColor: '#002851'
        },
        tabBarActiveTintColor: '#339cff',
        tabBarInactiveTintColor: '#FFF'
    }
)

const tabs = [{
    name: 'Principal',
    Component: Principal,
    icon: 'home'},
    {
        name: 'Consultas',
        Component: Consultas,
        icon: 'calendar'},
        {
            name: 'Explorar',
            Component: Explorar,
            icon: 'search'},
            {
                name: 'Perfil',
                Component: Perfil,
                icon: 'person'},
]

export default function Tabs (){
    return (
        <Tab.Navigator screenOptions={screenOptions}>
       {tabs.map((tab)=>(
            <Tab.Screen
                key={tab.name}
                name={tab.name}
                component= {tab.Component}
                options={{
                headerShown:false,
                 tabBarIcon:({color,size})=> (
                    <Ionicons name={tab.icon} color={color} size={size}
                        />
                    )
                }}
        />
        
        ))
        }
            
        </Tab.Navigator>
    )
}