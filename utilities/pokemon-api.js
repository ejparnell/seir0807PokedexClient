import sendRequest from './send-request'
const BASE_URL = 'https://seir0807pokedexapi.onrender.com/pokemon'

export async function createPokemon(pokemonData) {
    return sendRequest(BASE_URL, 'POST', pokemonData)
}

export async function getUserPokemon(user) {
    return sendRequest(`${BASE_URL}/${user._id}`)
}

export async function updateNickname(pokemonId, updateData) {
    return sendRequest(`${BASE_URL}/${pokemonId}`, 'PATCH', updateData)
}

export async function deletePokemon(pokemonId) {
    return sendRequest(`${BASE_URL}/${pokemonId}`, 'DELETE')
}