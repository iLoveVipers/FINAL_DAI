import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from '../App';
import Home from '../Home';


import Contactos from '../Contactos';
import ClipBoard from '../Clipboard';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Contactos" component={Contactos} />
                <Stack.Screen name="Clipboard" component={ClipBoard} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;