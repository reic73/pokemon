/**
 * @jest-environment jsdom
 */

import * as helper from "Helpers/common-helper";
require("dotenv").config({ path: "./.env" });
const OLD_ENV = process.env;

export const SESSION_KEY = "myPokemon";
export const PER_PAGE = 20;

afterAll(() => {
  process.env = OLD_ENV; // Restore old environment
});

describe("Helper test", () => {
  describe("constant", () => {
    it("SESSION_KEY should be defined", () => {
      const result = helper.SESSION_KEY;

      expect(result).toBeDefined();
    });
  });

  describe("pokemonNumberHelper", () => {
    it("should return unit string", () => {
      const data = 1;
      const result = helper.pokemonNumberHelper(data);

      expect(result).toBe("#001");
    });

    it("should return tens string", () => {
      const data = 10;
      const result = helper.pokemonNumberHelper(data);

      expect(result).toBe("#010");
    });

    it("should return percents string", () => {
      const data = 100;
      const result = helper.pokemonNumberHelper(data);

      expect(result).toBe("#100");
    });
  });

  describe("slugToCapitalizeEachWord", () => {
    it("should capitalize each word", () => {
      const slug = "this-is-slug";
      const result = helper.slugToCapitalizeEachWord(slug);

      expect(result).toBe("This Is Slug");
    });
  });

  describe("capitalizeEachWord", () => {
    it("should capitalize each word", () => {
      const words = "this is normal";
      const result = helper.capitalizeEachWord(words);

      expect(result).toBe("This Is Normal");
    });
  });

  describe("capitalizeWord", () => {
    it("should capitalize first letter", () => {
      const wordList = ["alpha"];
      const result = helper.capitalizeWord(wordList);

      expect(result).toBe("Alpha");
    });
  });

  describe("isJson", () => {
    it("should be falsy", () => {
      const str = '{ key: "value" }';
      const result = helper.isJson(str);

      expect(result).toBeFalsy();
    });

    it("should return truthy", () => {
      const str = '{"key":"value"}';
      const result = helper.isJson(str);

      expect(result).toBeTruthy;
    });
  });

  describe("getSessionStorageData", () => {
    it("should return empty object", () => {
      const result = helper.getSessionStorageData();

      expect(result).toEqual({});
    });

    it("should return any object", () => {
      const str = '{"key":"value"}';
      sessionStorage.setItem(SESSION_KEY, str);

      const result = helper.getSessionStorageData();

      expect(result).toEqual({ key: "value" });
    });
  });

  describe("getOwnedPokemonQuantity", () => {
    it("should return 0", () => {
      const id = 1;
      const data = { 2: { names: ["name1", "name2", "name3"] } };
      const result = helper.getOwnedPokemonOuantity(id, data);

      expect(result).toBe(0);
    });

    it("should return any number", () => {
      const id = 2;
      const data = { 2: { names: ["name1", "name2", "name3"] } };
      const result = helper.getOwnedPokemonOuantity(id, data);

      expect(result).toBe(3);
    });
  });

  describe("getPokemonAbilities", () => {
    it("should return 1 abilities", () => {
      const data = [
        { ability: { name: "ability one" } },
        { ability: { name: "ability two" } },
      ];

      const result = helper.getPokemonAbilities(data);
      expect(result).toBe("Ability one");
    });
  });

  describe("getPokemonMoves", () => {
    it("should return 3 moves", () => {
      const data = [
        { move: { name: "move one" } },
        { move: { name: "move two" } },
        { move: { name: "move three" } },
        { move: { name: "move four" } },
      ];

      const result = helper.getPokemonMoves(data);

      expect(result).toEqual(["Move one", "Move two", "Move three"]);
    });
  });

  describe("getPokemonTypes", () => {
    it("should return 3 types", () => {
      const data = [
        { type: { name: "type-one" } },
        { type: { name: "type-two" } },
        { type: { name: "type-three" } },
        { type: { name: "type-four" } },
      ];

      const result = helper.getPokemonTypes(data);

      expect(result).toEqual(["Type One", "Type Two", "Type Three"]);
    });
  });

  describe("getPokemonDataFromStorage", () => {
    it("should return pokemon data from storage", () => {
      const data = {
        1: {
          data: {
            id: 1,
            image: "image",
            name: "Venusaur",
          },
          names: ["My Pokemon 1"],
        },
      };
      const page = 1;
      const expectedResult = {
        data: [
          {
            id: 1,
            image: "image",
            name: "My Pokemon 1",
            pokemonName: "Venusaur",
          },
        ],
        maxPage: 1,
        totalOwned: 1,
      };

      const result = helper.getPokemonDataFromStorage(data, page);

      expect(result).toEqual(expectedResult);
    });

    it("should return pokemon data from storage when names more than PER_PAGE", () => {
      const data = {
        1: {
          data: {
            id: 1,
            image: "image",
            name: "Venusaur",
          },
          names: ["My Pokemon 1", "My Pokemon 2", "My Pokemon 3"],
        },
      };
      const page = 1;
      const perPage = 2;
      const expectedResult = {
        data: [
          {
            id: 1,
            image: "image",
            name: "My Pokemon 1",
            pokemonName: "Venusaur",
          },
          {
            id: 1,
            image: "image",
            name: "My Pokemon 2",
            pokemonName: "Venusaur",
          },
        ],
        maxPage: 2,
        totalOwned: 3,
      };

      const result = helper.getPokemonDataFromStorage(data, page, perPage);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("setNewPokemonToStorage", () => {
    it("should return void and set new pokemon to storage", () => {
      const data = {
        1: {
          data: {
            id: 1,
            image: "image",
            name: "Venusaur",
          },
          names: ["My Pokemon 1"],
        },
      };
      const pokemonData = {
        id: 2,
        image: "image",
        name: "Ivysaur",
      };
      const name = "Ivy";

      helper.setNewPokemonToStorage(data, pokemonData, name); // not finished
    });
  });

  describe("setExistingPokemonToStorage", () => {
    it("should return void and set existing pokemon to storage", () => {
      const data = {
        1: {
          data: {
            id: 1,
            image: "image",
            name: "Venusaur",
          },
          names: ["My Pokemon 1"],
        },
      };
      const pokemonData = {
        id: 1,
        image: "image",
        name: "Venusaur",
      };
      const name = "My Pokemon 2";

      helper.setExistingPokemonToStorage(data, pokemonData, name); // not finished
    });
  });

  describe("releasePokemon", () => {
    it("should return updated pokemon data", () => {
      const data = {
        1: {
          data: {
            id: 1,
            image: "image",
            name: "Venusaur",
          },
          names: ["My Pokemon 1, My Pokemon 2"],
        },
      };
      const releasePokemon = { id: 1, name: "My Pokemon 1" };
      const page = 1;
      const perPage = 20
      const expectedResult = {
        data: [
          {
            id: 1,
            image: "image",
            name: "My Pokemon 1, My Pokemon 2",
            pokemonName: "Venusaur",
          },
        ],
        maxPage: 1,
        totalOwned: 1,
      };

      const result = helper.releasePokemon(data, releasePokemon, page, perPage);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("getUrl", () => {
    it("should return local url", () => {
      process.env.NEXT_PUBLIC_ENV = "local";
      const url = "/my-url";
      const result = helper.getUrl(url);

      expect(result).toEqual(url);
    });

    it("should return production url", () => {
      process.env.NEXT_PUBLIC_ENV = "production";
      const url = "/my-url";
      const result = helper.getUrl(url);

      expect(result).toEqual("/" + process.env.NEXT_PUBLIC_PROJECT_NAME + url);
    });
  });
});
