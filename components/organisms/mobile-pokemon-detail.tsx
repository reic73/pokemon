import React from "react";
import { pokemonNumberHelper } from "Helpers/common-helper";
import typeColors from "Constants/pokemon-types-color";
import ButtonContained from "Components/atoms/button-contained";

const MobilePokemonDetail = (props: any) => {
  return (
    <div>
      <div className="flex justify-center text-3xl text-center">
        <div>
          {props.data.name}{" "}
          <span className="text-gray-500">
            {pokemonNumberHelper(props.data.id)}
          </span>
        </div>
      </div>

      <div className="flex justify-center bg-gray-200 rounded my-4 overflow-hidden">
        <img
          src={props.data.image}
          alt="pokemon-detail"
          style={{ width: "400px" }}
        />
      </div>

      <div className="bg-red-500 rounded-lg flex p-3 ">
        <div className="w-1/2">
          <div className="mb-2">
            <div className="text-white text-sm">Height</div>
            <div className="font-semibold text-xl">{props.data.height}</div>
          </div>
          <div>
            <div className="text-white text-sm">Weight</div>
            <div className="font-semibold text-xl">{props.data.weight}</div>
          </div>
        </div>
        <div className="w-1/2">
          <div>
            <div className="text-white text-sm">Ability</div>
            <div className="font-semibold text-xl">{props.data.ability}</div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-xl font-semibold my-2">Moves</div>
        <div className="flex">
          {props.data.moves.length ? (
            props.data.moves.map((move: string, index: number) => (
              <div
                key={index}
                className="border ml-2 px-2 py-1 rounded-xl border-gray-500 text-gray-500 text-xs"
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
        <div className="text-xl font-semibold my-2">Types</div>
        <div className="flex">
          {props.data.types.length ? (
            props.data.types.map((type: string, index: number) => (
              <div
                key={index}
                className="ml-2 px-4 rounded-xl text-white text-sm"
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

      <div className="fixed bottom-0 right-0 flex w-full p-4 bg-white border">
        <ButtonContained
          disabled={props.disabled}
          onClick={() => props.onClick()}
          fullWidth={true}
        >
          {`Catch 'Em`}
        </ButtonContained>
      </div>
    </div>
  );
};

export default MobilePokemonDetail;
