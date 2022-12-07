import React, {useEffect} from "react";
import {Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {DetailsPropsType, useAppNavigation} from "./types";
import {useAppDispatch, useAppSelector} from "../store/store";
import {clearPokemonState, getPokemonById} from "../store/rootSlice";

import pokeballBackgroundImage from "../global/assets/Pokeball-bg.png";
import dotsCardImage from "../global/assets/Pokeball.png";
import backImage from "../global/assets/Back.png";
import theme from "../global/styles/theme";

export const Details  = (props: DetailsPropsType) => {

    const pokemon = useAppSelector(state => state.root.pokemon);
    const dispatch = useAppDispatch();
    const navigation = useAppNavigation();

    const pokemonId = props.route.params.id;
    const getLocalPokemonById = (id: number) => {
        const localPokemon = require("../pokeLocal.json");
        return localPokemon.find((item: any) => item.id === id);
    }

    // get pokemon object from local json file by id
    const localPokemon = getLocalPokemonById(pokemonId);
    const pokeName =  localPokemon.name.charAt(0).toUpperCase() + localPokemon.name.slice(1)
    // get types array from local json file by id
    const localPokemonTypes = localPokemon.type

    //get base stats from local json file by id
    const localPokemonStats = localPokemon.base

    // make destrycturing for base stats
    const {HP, Attack, Defense, "Sp. Attack": SpAttack, "Sp. Defense": SpDefense, Speed} = localPokemonStats;

    /*useEffect(() => {
        dispatch(getPokemonById(props.route.params.url as string));
        return () => {
            dispatch(clearPokemonState());
        }
    }, []);*/

    console.log(localPokemonStats)
    return (
           /* <View>
                <Image source={{uri: pokemon.sprites.other["official-artwork"].front_default}}
                       style={{width: 200, height: 200}}
                />
                <Text>{pokemon.name}</Text>
            </View>*/
                <View style={[styles.container, {backgroundColor: theme.colors.backgroundType[localPokemonTypes[0].toLowerCase()]}]}>
                    <View style={styles.header}>
                        <ImageBackground source={pokeballBackgroundImage}/>
                        <ImageBackground source={dotsCardImage}/>
                        <TouchableOpacity style={styles.goBackButton} onPress={navigation.goBack}>
                            <Image source={backImage}/>
                        </TouchableOpacity>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <View>
                                <Text style={styles.pokeName}>{pokeName}</Text>
                                <View style={styles.typeList}>
                                    {localPokemon.type.map((type: string, index: number) => (
                                        <View style={[styles.badge, {backgroundColor: theme.colors.type[type.toLowerCase()]}]} key={index}>
                                            <Text style={styles.badgeText} key={index}>{type}</Text>
                                        </View>
                                    ))}
                                    {/*<View style={styles.badge}>
                                        <Text>Grass</Text>
                                    </View>
                                    <View style={styles.badge}>
                                        <Text>Fire</Text>
                                    </View>*/}
                                </View>
                            </View>
                            <Text style={styles.pokeNumber}>#{localPokemon.id.toString().padStart(3,"0")}</Text>
                        </View>
                        <Image style={styles.pokemonImage}
                               source={{
                         uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
                        }}/>
                    </View>

                    <View style={styles.content}>
                        <ScrollView>
                            <Text style={styles.paragraph}>Status</Text>

                            <View style={styles.status}>
                                <Text style={styles.type}>HP</Text>
                                <Text style={styles.value}>{HP}</Text>
                                <ScrollView style={styles.percentBar}>
                                    <ScrollView style={styles.percent}/>
                                </ScrollView>
                            </View>

                            <View style={styles.status}>
                                <Text style={styles.type}>Attack</Text>
                                <Text style={styles.value}>{Attack}</Text>
                                <ScrollView style={styles.percentBar}>
                                    <ScrollView style={styles.percent}/>
                                </ScrollView>
                            </View>

                            <View style={styles.status}>
                                <Text style={styles.type}>Defense</Text>
                                <Text style={styles.value}>{Defense}</Text>
                                <ScrollView style={styles.percentBar}>
                                    <ScrollView style={styles.percent}/>
                                </ScrollView>
                            </View>

                            <View style={styles.status}>
                                <Text style={styles.type}>St. Atk</Text>
                                <Text style={styles.value}>{SpAttack}</Text>
                                <ScrollView style={styles.percentBar}>
                                    <ScrollView style={styles.percent}/>
                                </ScrollView>
                            </View>

                            <View style={styles.status}>
                                <Text style={styles.type}>Sp Def</Text>
                                <Text style={styles.value}>{SpDefense}</Text>
                                <ScrollView style={styles.percentBar}>
                                    <ScrollView style={styles.percent}/>
                                </ScrollView>
                            </View>

                            <View style={styles.status}>
                                <Text style={styles.type}>Speed</Text>
                                <Text style={styles.value}>{Speed}</Text>
                                <ScrollView style={styles.percentBar}>
                                    <ScrollView style={styles.percent}/>
                                </ScrollView>
                            </View>

                            <View style={styles.status}>
                                <Text style={styles.type}>Total</Text>
                                <Text style={styles.value}>
                                    {HP + Attack + Defense + SpAttack + SpDefense + Speed}
                                </Text>
                                <ScrollView style={styles.percentBar}>
                                    <ScrollView style={styles.percent}/>
                                </ScrollView>
                            </View>
                        </ScrollView>
                    </View>
                </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    },
    containerBackgroundImage: {
        width: 190,
        height: 190,
        opacity: 0.3,

        position: 'absolute',
        bottom: -20,
        right: -20,
    },
    dotsBackgroundImage:{
        width: 74,
        height: 32,
        position: 'absolute',
        bottom: 120,
        left: 60,
    },
    header: {
        marginTop: 30,
        paddingVertical: 30,
        paddingHorizontal: 20,
        position: "relative",
        height: "45%",
        zIndex: 1,
    },
    goBackButton: {
        width: 32,
        height: 32,
        justifyContent: "center",
        marginBottom: 20,
    },
    goBackImage: {
        width: 25,
        height: 25,
    },
    pokeName: {
        color: theme.colors.text.white,
        fontSize: 32,
        lineHeight: 38,
        fontWeight: "700",
    },
    pokeNumber:{
        color: theme.colors.text.white,
        fontSize: 16,
        lineHeight: 19,
        fontWeight: "700",
    },
    typeList: {
        flexDirection: "row"
    },
    badge:{
        backgroundColor: theme.colors.text.white,
        borderRadius: 3,
        paddingVertical: 5.5,
        paddingHorizontal: 5,
        marginTop:5,
        marginRight: 5,
    },
    badgeText:{
        color: theme.colors.text.white,
        fontSize: 12,
        lineHeight: 14,
        fontWeight: "400",
    },
    pokemonImage:{
        width: 250,
        height: 250,
        position: "absolute",
        alignSelf: "center",
        bottom: -50,
    },
    content:{
        flex: 1,
        height: "55%",
        zIndex: 0,
        backgroundColor: theme.colors.background.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 40,
        paddingHorizontal: 20, // can be error
    },
    paragraph:{
        color: theme.colors.type.normal, // make dynamic
        fontSize: 24,
        marginTop: 10,
        fontWeight: "700",
    },
    status:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    type:{
        color: theme.colors.text.gray,
        fontSize: 16,
        marginTop: 10,
        fontWeight: "400",
        width: 70,
    },
    value:{
        color: theme.colors.text.gray,
        fontSize: 16,
        marginTop: 10,
        fontWeight: "bold",
        width: 40,
        textAlign: "right",
        marginRight: 20,
    },
    percentBar: {
        backgroundColor: "#eee",
        width: "100%",
        height: 4,
        borderRadius: 4,
        marginTop: 10,
    },
    percent:{
        backgroundColor: theme.colors.type.normal,
        width: "50%",
        height: 4,
        borderRadius: 4,
    },
})
