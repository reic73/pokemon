import Axios from "axios";
import {
  slugToCapitalizeEachWord,
  capitalizeEachWord,
} from "Helpers/common-helper";

export default class Request {
  public static async retrievePokemonLists(page: number) {
    try {
      const limit = 20;
      const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${
        limit * (page - 1)
      }`;

      const response = await Axios.get(url);

      const responseData = response.data;
      const maxData = responseData.count;
      const maxPage = Math.ceil(maxData / limit);

      const pokemonData = responseData.results;
      const promises = pokemonData.map(async (data: any) => {
        const pokemonDetails = await Axios.get(data.url);
        data["id"] = pokemonDetails.data.id;
        data["image"] = pokemonDetails.data.sprites.front_default;
      });
      await Promise.all(promises);

      const toReturn = {
        data: pokemonData,
        maxPage,
      };
      return toReturn;
    } catch (e) {
      alert("Data pokemon tidak ditemukan");
    }
  }

  public static async retrievePokemonDetails(id: string | string[]) {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

      const response = await Axios.get(url);

      const responseData = response.data;
      const abilities = responseData.abilities[0];
      const abilityName = capitalizeEachWord(abilities.ability.name);

      const moves = responseData.moves.slice(0, 3);
      const moveLists: string[] = [];
      moves.map((move: any) => {
        const movesSlug = move.move.name;
        const movesName = slugToCapitalizeEachWord(movesSlug);
        moveLists.push(movesName);
      });

      const types = responseData.types.slice(0, 3);
      const typeLists: string[] = [];
      types.map((type: any) => {
        const typeName = type.type.name;
        typeLists.push(capitalizeEachWord(typeName));
      });

      const height = responseData.height;
      const weight = responseData.weight;
      const name = responseData.forms[0].name;
      const image = responseData.sprites.front_default;
      const pokemonId = responseData.id;

      const toReturn = {
        ability: abilityName,
        moves: moveLists,
        type: typeLists,
        height,
        weight,
        name,
        image,
        id: pokemonId,
      };

      return toReturn;
    } catch (e) {
      alert("Data pokemon tidak ditemukan");
    }
  }
}
