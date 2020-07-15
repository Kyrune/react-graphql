import React from 'react';
import useQuery from '@apollo/react-hooks';
import { Pokemon } from '../components/Pokemon';

export function PokemonsContainer() {
    const { data: { pokemons = []} = {} } = useQuery(GET_POKEMON, {
        variables: { first: 9 },
    });

    return (
        
    )
}