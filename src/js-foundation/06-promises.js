
import { http } from "../plugins/index.js";

const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await http.get(url);
    // const resp = await fetch(url);
    // const pokemon = await resp.json();

    return pokemon.name;
}


export default getPokemonById
