import React, {useEffect} from "react";
import {View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image} from "react-native";

import dotsCardImage from "../global/assets/Dots.png";
import pokeballCardImage from "../global/assets/Pokeball.png";
import {useAppDispatch, useAppSelector} from "../store/store";
import {clearPokemonState, getPokemonById} from "../store/rootSlice";
import {DetailsPropsType} from "../screens/types";
import theme from "../global/styles/theme";

type CardsPropsType = {
    name: string
    id: number
    types: Array<string>
    url?: string
}

export const CardPokemon = (props: CardsPropsType) => {

    /*const pokemon = useAppSelector(state => state.root.pokemon);
    const dispatch = useAppDispatch();*/

  /*  useEffect(() => {
        dispatch(getPokemonById(props.route.params.url));
        return () => {
            dispatch(clearPokemonState());
        }
    }, []);*/
    /*const pokeName = props.name.charAt(0).toUpperCase() + props.name.slice(1);*/

    const typePoke = props.types[0].toLowerCase();
    const typePokeBadge = props.types[0].toLowerCase();

    return (
        <View style={[styles.card,{backgroundColor: theme.colors.backgroundType[typePoke]}]}>
            <View>
                <ImageBackground style={styles.cardBackgroundDotImage} source={dotsCardImage}/>
                <Text style={styles.pokemonNumber}>#{props.id.toString().padStart(3,"0")}</Text>
                <Text style={styles.pokemonName}>{props.name}</Text>
                    <View style={styles.pokemonTypeList}>
                        {props.types.map((type, index) => (
                        <View style={[styles.pokemonTypeBadge, {backgroundColor: theme.colors.type[type.toLowerCase()]}]} key={index}>
                                <Text key={index} style={styles.pokemonType}>{type}</Text>
                        </View>
                        ))}
                    </View>
            </View>
            <View>
                <ImageBackground style={styles.pokemonBackgroundImage} source={pokeballCardImage}/>
                <Image style={styles.pokemonImage}
                       source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`}}
                       /*source={{uri: pokemon.sprites.other["official-artwork"].front_default}}*/
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        justifyContent: "space-between",
        position: "relative",
        backgroundColor: theme.colors.backgroundType.fighting,
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
        color: "#fff",
        fontSize: 26,
        lineHeight: 31,
        fontWeight: "700",
    },
    pokemonTypeList: {
        flexDirection: "row",
    },
    pokemonTypeBadge: {
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
