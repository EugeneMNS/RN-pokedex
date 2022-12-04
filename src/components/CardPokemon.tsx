import React, {useEffect} from "react";
import {View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image} from "react-native";

import dotsCardImage from "../global/assets/Dots.png";
import pokeballCardImage from "../global/assets/Pokeball.png";
import {useAppDispatch, useAppSelector} from "../store/store";
import {clearPokemonState, getPokemonById} from "../store/rootSlice";
import {DetailsPropsType} from "../screens/types";

export const CardPokemon = (props: DetailsPropsType) => {

    /*const pokemon = useAppSelector(state => state.root.pokemon);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPokemonById(props.route.params.url));
        return () => {
            dispatch(clearPokemonState());
        }
    }, []);*/

    return (
        <TouchableOpacity style={styles.card} activeOpacity={0.9}>
            <View>
                <ImageBackground style={styles.cardBackgroundDotImage} source={dotsCardImage}/>
                <Text style={styles.pokemonNumber}>Number</Text>
                <Text style={styles.pokemonName}>Name</Text>
                    <View style={styles.pokemonTypeList}>
                        <View style={styles.pokemonTypeBadge}>
                            <Text style={styles.pokemonType}>Type</Text>
                        </View>
                    </View>
            </View>
            <View>
                <ImageBackground style={styles.pokemonBackgroundImage} source={pokeballCardImage}/>
                <Image style={styles.pokemonImage}
                       source={{uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"}}
                       /*source={{uri: pokemon.sprites.other["official-artwork"].front_default}}*/
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        justifyContent: "space-between",
        position: "relative",
        backgroundColor: "#888383",
        borderRadius: 10,
        padding: 20,
        marginTop:30
    },
    cardBackgroundDotImage: {
        width: 74,
        height: 32,
        position: "absolute",
        top: -15,
        right: -10,
    },
    pokemonNumber: {
        color: "#17171B",
        fontSize: 12,
        lineHeight: 14,
        fontWeight: "700",
        opacity: 0.6,
    },
    pokemonName: {
        color: "#bb241f",
        fontSize: 26,
        lineHeight: 31,
        fontWeight: "700",
    },
    pokemonTypeList: {
        flexDirection: "row",
    },
    pokemonTypeBadge: {
        backgroundColor: "#9DA0AA",
        borderRadius: 3,
        paddingVertical: 5.5,
        paddingHorizontal: 5,
        marginTop: 5,
        marginRight: 5,
    },
    pokemonType: {
        color: "#fff",
        fontSize: 12,
        lineHeight: 14,
        fontWeight: "400",
    },
    pokemonBackgroundImage: {
        width: 130,
        height: 115,
        position: "absolute",
        top: -20,
        right: -20,
    },
    pokemonImage: {
        width: 130,
        height: 130,
        position: "absolute",
        top: -50,
        right: -10,
    },

});
