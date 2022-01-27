import React from "react";
import Image from "next/image";
import { pokemonNumberHelper } from "Helpers/common-helper";
import typeColors from "Constants/pokemon-types-color";
import ButtonContained from "Components/atoms/button-contained";

const DesktopPokemonDetail = (props: any) => {
  const imageComponent = (data: any) => {
    return <div>test</div>;
  };
  return (
    <div className="mt-10 mx-40">
      <div className="flex">
        <div className="flex justify-center bg-gray-200 rounded overflow-hidden">
          <Image
            src={props.data.image}
            alt="pokemon-list"
            width={600}
            height={600}
          />
        </div>

        <div className="w-full ml-4 p-4">
          <div className="flex justify-center text-4xl text-center">
            <div>
              {props.data.name}{" "}
              <span className="text-gray-500">
                {pokemonNumberHelper(props.data.id)}
              </span>
            </div>
          </div>

          <div className="bg-red-500 rounded-lg flex py-3 px-5 my-4">
            <div className="w-1/2">
              <div className="mb-2">
                <div className="text-white">Height</div>
                <div className="font-semibold text-2xl">
                  {props.data.height}
                </div>
              </div>
              <div>
                <div className="text-white">Weight</div>
                <div className="font-semibold text-2xl">
                  {props.data.weight}
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div>
                <div className="text-white">Ability</div>
                <div className="font-semibold text-2xl">
                  {props.data.ability}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-2xl font-semibold my-2">Moves</div>
            <div className="flex">
              {props.data.moves.length ? (
                props.data.moves.map((move: string, index: number) => (
                  <div
                    key={index}
                    className="border ml-2 px-2 py-1 rounded-xl border-gray-500 text-gray-500 text-sm"
                  >
                    {move}
                  </div>
                ))
              ) : (
                <div>-</div>
              )}
            </div>
          </div>

          <div className="mt-4">
            <div className="text-2xl font-semibold my-2">Types</div>
            <div className="flex">
              {props.data.type.length ? (
                props.data.type.map((type: string, index: number) => (
                  <div
                    key={index}
                    className="ml-2 px-4 rounded-xl text-white"
                    style={{
                      backgroundColor: `${typeColors[`${type.toLowerCase()}`]}`,
                    }}
                  >
                    {type}
                  </div>
                ))
              ) : (
                <div>-</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full my-8 bg-white">
        <ButtonContained>{`Catch 'Em`}</ButtonContained>
      </div>
    </div>
  );
};

export default DesktopPokemonDetail;
