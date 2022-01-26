import Axios from "axios";

export default class Request {
  public static async retrievePokemonLists(page: number) {
    try {
      const limit = 20;
      const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${
        limit * page
      }`;

      const response = await Axios.get(url);

      const responseData = response.data;
      const pokemonData = responseData.results;
      const promises = pokemonData.map(async (data: any) => {
        const pokemonDetails = await Axios.get(data.url);
        data["id"] = pokemonDetails.data.id;
        data["image"] = pokemonDetails.data.sprites.front_default;
      });
      await Promise.all(promises);

      const toReturn = pokemonData;
      return toReturn;
    } catch (e) {
      alert("Terjadi kesalahan mengambil data list Pokemon");
      return {};
    }
  }
}
