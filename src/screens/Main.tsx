import React from "react";
import {Text, View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./types";
import {Details} from "./Details";
import {Home} from "./Home";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Main = () => {
    return (
        <View style={{flex:1}}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Details" component={Details}/>
            </Stack.Navigator>
        </View>
    )
}
