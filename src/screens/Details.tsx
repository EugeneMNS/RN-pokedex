import React, {useEffect} from "react";
import {Image, Text, View} from "react-native";
import {DetailsPropsType} from "./types";
import {useAppDispatch, useAppSelector} from "../store/store";
import {clearPokemonState, getPokemonById} from "../store/rootSlice";

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
            <View>
                <Image source={{uri: pokemon.sprites.other["official-artwork"].front_default}}
                       style={{width: 200, height: 200}}
                />
                <Text>{pokemon.name}</Text>
            </View>
            }
        </View>
    )
}
