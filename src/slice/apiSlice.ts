import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pokemon, PokemonDetails } from '../types/pokemon';

interface PokemonResponse {
  count: number;
  previous: string;
  next: string;
  results: Pokemon[];
}

export const pokemonApi = createApi({
  reducerPath: '',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/'
  }),
  endpoints: (builder) => ({
    getPokemon: builder.query<PokemonResponse, number | void>({
      query: (offset: number) => `pokemon?offset=${offset}&limit=20`
    }),
    getPokemonDetails: builder.query<PokemonDetails, string>({
      query: (name: string) => `pokemon/${name}`
    })
  })
});

export const { useGetPokemonQuery, useGetPokemonDetailsQuery } = pokemonApi;
