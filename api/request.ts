import Axios from "axios";
import {
  slugToCapitalizeEachWord,
  capitalizeEachWord,
} from "Helpers/common-helper";
import {
  getSessionStorageData,
  getOwnedPokemonOuantity,
  getPokemonAbilities,
  getPokemonMoves,
  getPokemonTypes,
} from "Helpers/common-helper";
import { IPokemonDetails, IPokemonLists } from "Redux/reducers/pokemon/reducer";

const mainUrl = "https://pokeapi.co";
export default class Request {
  public static async retrievePokemonLists(
    page: number
  ): Promise<IPokemonLists | undefined> {
    try {
      const perPage = 20;
      const url = `${mainUrl}/api/v2/pokemon?limit=${perPage}&offset=${
        perPage * (page - 1)
      }`;
      const sessionData = getSessionStorageData();
      const response = await Axios.get(url);
      const maxPage = Math.ceil(response.data.count / perPage);

      const pokemonData = response.data.results;
      const promises = pokemonData.map(async (data: any) => {
        const pokemonDetails = await Axios.get(data.url);
        const ownedPokemonQuantity = getOwnedPokemonOuantity(
          pokemonDetails.data.id,
          sessionData
        );
        data["id"] = pokemonDetails.data.id;
        data["image"] = pokemonDetails.data.sprites.front_default;
        data["owned"] = ownedPokemonQuantity;
      });
      await Promise.all(promises);

      const toReturn = {
        data: pokemonData,
        maxPage,
      };

      return toReturn;
    } catch (e) {
      console.log("error", e);
      alert("Pokemon data not found");
    }
  }

  public static async retrievePokemonDetails(
    id: string | string[]
  ): Promise<IPokemonDetails | undefined> {
    try {
      const url = `${mainUrl}/api/v2/pokemon/${id}`;
      const response = await Axios.get(url);
      const responseData = response.data;

      const ability = getPokemonAbilities(responseData.abilities);
      const moves = getPokemonMoves(responseData.moves);
      const types = getPokemonTypes(responseData.types);
      const height = responseData.height;
      const weight = responseData.weight;
      const name = capitalizeEachWord(responseData.forms[0].name);
      const image = responseData.sprites.front_default;
      const pokemonId = responseData.id;

      const toReturn = {
        ability,
        moves,
        types,
        height,
        weight,
        name,
        image,
        id: pokemonId,
      };

      return toReturn;
    } catch (e) {
      console.log("error", e);
      alert("Pokemon data not found");
    }
  }
}
