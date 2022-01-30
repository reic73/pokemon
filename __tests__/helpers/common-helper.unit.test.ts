import * as helper from "Helpers/common-helper";

describe("Helper test", () => {
  describe("constant", () => {
    it("SESSION_KEY should be defined", () => {
      const result = helper.SESSION_KEY;

      expect(result).toBeDefined();
    });

    it("PER_PAGE should be defined", () => {
      const result = helper.PER_PAGE;

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
});
