import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useAppNavigation} from "./types";

export const EntranceScreen = () => {
    const navigation = useAppNavigation();
    const getStarted = () => {
        navigation.navigate("Home");
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.wrapperAnimation}>
                </View>
                <Text style={styles.title}>Welcome!</Text>
                <Text style={styles.paragraph}>Find all pokemon in one place</Text>
            </View>

            <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={getStarted}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EA5D60",
        padding: 20,
    },
    content: {
        height: "70%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    wrapperAnimation: {
        width: 150,
        height: 150,
    },
    title: {
        marginTop: 20,
        color: "#fff",
        fontSize: 32,
        lineHeight: 39,
        fontWeight: "bold",
    },
    paragraph: {
       marginTop: 10,
        color: "#fff",
        textAlign: "center",
        fontSize: 14,
        lineHeight: 19,
        fontWeight: "400",
    },
    button: {
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
    },
    buttonText: {
        color: "#17171B",
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
    }
});
