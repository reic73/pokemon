import React from "react";
import Image from "next/image";
import { pokemonNumberHelper } from "Helpers/common-helper";

interface IMobilePokemonList {
  onSelect: (id: number) => void;
  id: number;
  data: {
    id: number;
    image: string;
    name: string;
    owned: number;
    url: string;
  };
  isMyPokemonPage?: boolean;
  onRelease?: (data: any) => void;
}

const MobilePokemonList = (props: IMobilePokemonList) => {
  return (
    <div
      className={`flex my-2 p-2 rounded-xl cursor-pointer justify-between ${
        props.id % 2 == 0 ? "bg-gray-100" : "border-2 border-gray-100 "
      }`}
      onClick={() => props.onSelect(props.data.id)}
    >
      <div className="flex">
        <Image
          src={props.data.image}
          alt="pokemon-list"
          width={75}
          height={75}
          className="absolute z-0"
        />

        <div className="flex items-center ml-3 font-bold text-sm">
          <div>
            {props.data.name.toUpperCase()}
            <div className="text-xs font-normal text-gray-500">
              {pokemonNumberHelper(props.data.id)}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center pr-2">
        {props.isMyPokemonPage ? (
          <div
            className="text-red-500 border border-red-500 px-2 text-sm font-semibold rounded"
            onClick={(event) => {
              event.stopPropagation();
              if (props.onRelease) {
                props.onRelease({
                  id: props.data.id,
                  name: props.data.name,
                });
              }
            }}
            style={{
              zIndex: 10,
            }}
          >
            Release
          </div>
        ) : (
          <div className="flex">
            <div className="p-1 rounded bg-red-500 text-white flex justify-center text-xs">
              {props.data.owned}
            </div>
            <div className="p-1 text-xs text-gray-500">Owned</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobilePokemonList;
