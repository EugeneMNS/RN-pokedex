import axios from "axios";

export type PokemonItem = {
    name: string;
    url?: string;
    id: number;
    type: string[];
}

export type Pokemon = {
    url: string;
    id: number;
    name: string;

    type: string[];
    sprites: {
        other: {
            'official-artwork': {
                front_default: string;
            }
        }
    }
}
const BASE_URL = 'https://pokeapi.co/api/v2';

const instance = axios.create({
    baseURL: BASE_URL,
});

export const api = {
    getAllPokemon () {
        return instance.get<{ results: PokemonItem[]}>('/pokemon?limit=151');
    },
    getPokemonById (url: string) {
        return instance.get<Pokemon>(url.replace(BASE_URL, ''));
    },
}
