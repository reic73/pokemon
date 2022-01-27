export const pokemonNumberHelper = (data: number) => {
  const isUnit = data / 10 < 1;
  const isTens = data / 100 < 1;

  if (isUnit) {
    return `#00${data}`;
  } else if (isTens) {
    return `#0${data}`;
  } else {
    return `#${data}`;
  }
};

export const slugToCapitalizeEachWord = (slug: string) => {
  const wordList: string[] = slug.split("-");

  return capitalizeWord(wordList);
};

export const capitalizeEachWord = (words: string) => {
  const wordList: string[] = words.split(" ");

  return capitalizeWord(wordList);
};

const capitalizeWord = (wordList: string[]) => {
  const length: number = wordList.length;
  let toReturn = "";
  wordList.map((word, index: number) => {
    const isLastIndex = index == length - 1;
    const space = isLastIndex ? "" : " ";
    toReturn += word[0].toUpperCase() + word.slice(1) + space;
  });

  return toReturn;
};