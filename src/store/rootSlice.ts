import {createAction, createAsyncThunk, createSlice, isRejectedWithValue} from "@reduxjs/toolkit";
import {api, Pokemon, PokemonItem} from "../api/api";

export const getAllPokemon = createAsyncThunk<PokemonItem[], void>('root/getAllPokemon',
    async (_, {rejectWithValue}) => {
    try {
        const resp = await api.getAllPokemon();
        return resp.data.results;
    } catch (e) {
        return  rejectWithValue(e);
    }

});

export const getPokemonById = createAsyncThunk<Pokemon, string>('root/getPokemonById',
    async (param, {rejectWithValue}) => {
        try {
            const resp = await api.getPokemonById(param);
            return resp.data;
        } catch (e) {
            return rejectWithValue(e);
        }
    });


const initialState = {
    allPokemon: [] as PokemonItem[],
    pokemon: {} as Pokemon,
}

export const clearPokemonState= createAction('root/clearPokemonState');

const rootSlice = createSlice({
    name: 'root',
    initialState: initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder
            .addCase(getAllPokemon.fulfilled, (state, action) => {
            state.allPokemon = action.payload;
        })
            .addCase(getPokemonById.fulfilled, (state, action) => {
            state.pokemon = action.payload;
        })
            .addCase(clearPokemonState, (state) => {
            state.pokemon = {} as Pokemon;
        })
    }
});

export const root = rootSlice.reducer;
