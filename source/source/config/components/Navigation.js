import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/Home";
import Agregar from "../screens/Agregar";

const stack = createNativeStackNavigator();

function Mystack(){
    return (
        <Stack.navigator>
            <Stack.Screen name="Inicio" component={Home}/>
            <Stack.Screen name="Agregar" component={Agregar}/>
        </Stack.navigator>
    )
}

export default function Navigation(){
    return (
        <NavigationContainer>
            <Mystack/>
        </NavigationContainer>
    )
}