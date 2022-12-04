import React from "react";
import {View, Text, TouchableOpacity, ImageBackground, StyleSheet} from "react-native";

export const CardPokemon = () => {
    return (
        <TouchableOpacity>
            <View>
                <ImageBackground/>
                <Text>Number</Text>
                <Text>Name</Text>
                <View>
                    <View>
                        <Text>Type</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        justifyContent: "space-between",
        position: "relative",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        marginTop:30
    }
});
