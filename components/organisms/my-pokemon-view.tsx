import React from "react";
import ViewSwitch from "Components/templates/viewswitch";
import MobilePokemonList from "Components/organisms/mobile-pokemon-list";
import DesktopPokemonList from "Components/organisms/desktop-pokemon-list";

interface IMyPokemonView {
  pokemonData: any;
  onSelect: (id: number) => void;
  onRelease: (data: any) => void;
}

const MyPokemonView = (props: IMyPokemonView) => {
  return (
    <div className="md:flex md:flex-wrap">
      {props.pokemonData.data.length ? (
        props.pokemonData.data.map((data: any, index: number) => (
          <div
            key={index}
            className="lg:w-1/5 md:w-1/3 md:p-1 lg:my-5 lg:p-2 my-3"
          >
            <ViewSwitch
              desktop={
                <DesktopPokemonList
                  data={data}
                  key={index}
                  onSelect={props.onSelect}
                  isMyPokemonPage={true}
                  onRelease={props.onRelease}
                />
              }
              mobile={
                <MobilePokemonList
                  data={data}
                  key={index}
                  onSelect={props.onSelect}
                  id={index}
                  isMyPokemonPage={true}
                  onRelease={props.onRelease}
                />
              }
            />
          </div>
        ))
      ) : (
        <div className="border w-full rounded my-4">
          <ViewSwitch
            desktop={
              <div className="flex justify-center items-center h-36">
                <div className="grid place-items-center">
                  <div>You have no Pokemon yet!</div>
                  <div className="text-red-500 font-semibold text-lg">{`Go catch 'em!`}</div>
                </div>
              </div>
            }
            mobile={
              <div className="flex justify-center items-center h-20">
                <div className="grid place-items-center">
                  <div className="text-sm">You have no Pokemon yet!</div>
                  <div className="text-red-500 font-semibold">{`Go catch 'em!`}</div>
                </div>
              </div>
            }
          />
        </div>
      )}
    </div>
  );
};

export default MyPokemonView;
