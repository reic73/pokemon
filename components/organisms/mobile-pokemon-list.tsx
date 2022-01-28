import React from "react";
import Image from "next/image";
import { pokemonNumberHelper } from "Helpers/common-helper";

const MobilePokemonList = (props: any) => {
  return (
    <div
      className={`flex my-2 p-2 rounded-xl cursor-pointer justify-between ${
        props.data.id % 2 == 0
          ? "bg-gray-100 hover:bg-gray-300"
          : " border-2 border-gray-100 hover:bg-gray-200"
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

      <div className="flex items-center">
        <div className="p-1 rounded bg-red-500 text-white flex justify-center text-xs">
          0
        </div>
        <div className="p-1 text-xs text-gray-500">owned</div>
      </div>
    </div>
  );
};

export default MobilePokemonList;
