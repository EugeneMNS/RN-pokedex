import React, {useEffect} from "react";
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {DetailsPropsType} from "./types";
import {useAppDispatch, useAppSelector} from "../store/store";
import {clearPokemonState, getPokemonById} from "../store/rootSlice";

import pokeballBackgroundImage from "../global/assets/Pokeball-bg.png";
import dotsCardImage from "../global/assets/Pokeball.png";
import backImage from "../global/assets/Back.png";

export const Details  = (props: DetailsPropsType) => {

    const pokemon = useAppSelector(state => state.root.pokemon);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPokemonById(props.route.params.url));
        return () => {
            dispatch(clearPokemonState());
        }
    }, []);

    return (
        <View>
            {pokemon &&
           /* <View>
                <Image source={{uri: pokemon.sprites.other["official-artwork"].front_default}}
                       style={{width: 200, height: 200}}
                />
                <Text>{pokemon.name}</Text>
            </View>*/
                <View style={styles.container}>
                    <View style={styles.header}>
                        <ImageBackground source={pokeballBackgroundImage}/>
                        <ImageBackground source={dotsCardImage}/>
                        <TouchableOpacity style={styles.goBackButton}>
                            <Image source={backImage}/>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#B5B9C4",
        flex: 1,
        position: "relative",
    },
    containerBackgroundImage: {},
    dotsBackgroundImage:{},
    header: {},
    goBackButton: {},
    goBackImage: {},
    pokeName: {},
    pokeNumber:{},
    typeList: {},
    badge:{},
    badgeText:{},
    pokemonImage:{},
    content:{},
    scrollView:{},
    paragraph:{},
    status:{},
    type:{},
    value:{},
    percentBar: {},
    percent:{},
})
