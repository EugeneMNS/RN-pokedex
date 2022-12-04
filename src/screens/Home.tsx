import React, {useEffect, useState} from "react";
import {FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {api, PokemonItem} from "../api/api";
import {useAppNavigation} from "./types";
import {useAppDispatch, useAppSelector} from "../store/store";
import {getAllPokemon} from "../store/rootSlice";
import {CardPokemon} from "../components/CardPokemon";

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
                <View style={styles.item}>
                    <Text>{item.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style = {{paddingHorizontal:20}}>
            {/*<FlatList data={allPokemon} renderItem={render} />*/}
            <CardPokemon/>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 5,
    }
});
