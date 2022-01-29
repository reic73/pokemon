/* eslint-disable @next/next/no-img-element */
import React from "react";
import { pokemonNumberHelper } from "Helpers/common-helper";

interface IDesktopPokemonList {
  onSelect: (id: number) => void;
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

const DesktopPokemonList = (props: IDesktopPokemonList) => {
  return (
    <div
      className="rounded-xl bg-gray-100 overflow-hidden hover:bg-gray-200 cursor-pointer"
      onClick={() => props.onSelect(props.data.id)}
    >
      <div className="flex justify-center">
        <img
          src={props.data.image}
          alt="pokemon-list"
          style={{ width: "185px" }}
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
          {props.isMyPokemonPage ? (
            <div
              className="text-red-500 border border-red-500 px-2 font-semibold rounded hover:bg-red-500 hover:text-white"
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
            <div>
              <div className="text-xs">Owned</div>
              <div className="p-1 rounded bg-red-500 text-white flex justify-center">
                {props.data.owned}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesktopPokemonList;
