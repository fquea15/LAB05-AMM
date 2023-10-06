import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

import HomScreen from "./Screens/HomScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import StackScreen from "./Screens/StackScreen";
import Productos from "./componentes/Productos";

const Tab = createBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <HomeStackNavigator.Navigator 
            initialRouteName="HomeScreen"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#000',
                    elevation: 0, // Remueve la sombra en Android
                    shadowOpacity: 0, // Remueve la sombra en iOS
                },
                headerTintColor: '#fff',
            }}
        >
            <HomeStackNavigator.Screen name="HomeScreen" component={HomScreen} options={{ title: 'Inicio' }} />
            <HomeStackNavigator.Screen name="Stack" component={StackScreen} options={{ title: 'Perfil' }} />
            <HomeStackNavigator.Screen name="Productos" component={Productos} options={{ title: 'Series' }} />
        </HomeStackNavigator.Navigator>
    );
}

const MyTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: '#000' },
                tabBarActiveTintColor: '#E50914',
            }}
        >
            {[
                { name: "Home", component: HomScreen, icon: "home", label: "Inicio" },
                { name: "Series", component: Productos, icon: "view-list", label: "Series" },
                { name: "Settings", component: SettingsScreen, icon: "cog", label: "Ajustes" },
                { name: "Perfil", component: StackScreen, icon: "account", label: "Perfil" }
            ].map(({ name, component, icon, label }) => (
                <Tab.Screen
                    key={name}
                    name={name}
                    component={component}
                    options={{
                        tabBarLabel: label,
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name={icon} color={color} size={size} />
                        ),
                    }}
                />
            ))}
        </Tab.Navigator>
    );
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}

export default Navigation;
