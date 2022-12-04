import React, {useEffect, useState} from "react";
import {FlatList, ImageBackground, ListRenderItem, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {api, PokemonItem} from "../api/api";
import {useAppNavigation} from "./types";
import {useAppDispatch, useAppSelector} from "../store/store";
import {getAllPokemon} from "../store/rootSlice";
import {CardPokemon} from "../components/CardPokemon";

import pokeballBackgroundImage from "../global/assets/Pokeball-bg-half.png";

export const Home = () => {

    const allPokemon = useAppSelector(state => state.root.allPokemon);
    const dispatch = useAppDispatch();
    const navigation = useAppNavigation();

    useEffect(() => {
        dispatch(getAllPokemon());
    }, []);

    const render: ListRenderItem<PokemonItem> = ({item}) => {
        return (
            <TouchableOpacity onPress={() => {
                navigation.navigate("Details", {url: item.url})
            }}>
                {/*<View style={styles.item}>
                    <Text>{item.name}</Text>
                </View>*/}
                <CardPokemon />
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.containerBackgroundImage}
                             source={pokeballBackgroundImage}/>
            <View style={styles.scrollView}>
                <Text style={styles.title}>Pokedex</Text>
                <Text style={styles.paragraph}>Find all Pokemon in one place</Text>
                <View style={styles.content}>
                    <FlatList data={allPokemon} renderItem={render}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        position: "relative",
    },
    containerBackgroundImage: {
        width: "100%",
        height: 200,
        position: "absolute",
        top: 0,
    },
    scrollView: {
        paddingHorizontal: 20,
    },
    content: {marginBottom: 50},
    title: {
        color: "#17171B",
        fontSize: 32,
        fontWeight: "bold",
        marginTop: 80,
    },
    paragraph: {
        color: "#747476",
        fontSize: 16,
        marginVertical: 10,
        fontWeight: "400",
    },
    item: {
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 5,
    }
});
