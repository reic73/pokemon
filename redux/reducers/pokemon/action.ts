export const retrievePokemonLists = (data: any) => ({
  type: "RETRIEVE_POKEMON_LIST",
  payload: data,
});

export const retrievePokemonDetails = (data: any) => ({
  type: "RETRIEVE_POKEMON_DETAILS",
  payload: data,
});
