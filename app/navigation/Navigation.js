import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from '../App';
import Home from '../Home';
import Modal from '../Modal';
import Contactos from '../Contactos';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Contactos" component={Contactos} />
                <Stack.Screen name="Modal" component={Modal}/>   
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;