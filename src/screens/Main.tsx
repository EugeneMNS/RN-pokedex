import React from "react";
import {Text, View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./types";
import {Details} from "./Details";
import {Home} from "./Home";
import {EntranceScreen} from "./EntaranceScreen/EntranceScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Main = () => {
    return (
        <View style={{flex:1}}>
            <Stack.Navigator
                initialRouteName="EntranceScreen"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="EntranceScreen" component={EntranceScreen} />
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Details" component={Details}/>
            </Stack.Navigator>
        </View>
    )
}
