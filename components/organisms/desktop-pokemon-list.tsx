import React from "react";
import Image from "next/image";
import { pokemonNumberHelper } from "Helpers/common-helper";

const DesktopPokemonList = (props: any) => {
  return (
    <div className="rounded-xl bg-gray-100 overflow-hidden hover:bg-gray-200">
      <div className="flex justify-center">
        <Image
          src={props.data.image}
          alt="pokemon-list"
          width={185}
          height={185}
        />
      </div>

      <div className="flex justify-between px-4">
        <div className="flex items-center my-3 font-bold text-lg">
          <div>
            {props.data.name.toUpperCase()}
            <div className="text-base font-normal text-gray-500">
              {pokemonNumberHelper(props.data.id)}
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div>
            <div className="text-xs">Owned</div>
            <div className="p-1 rounded bg-red-500 text-white flex justify-center">
              10
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopPokemonList;
