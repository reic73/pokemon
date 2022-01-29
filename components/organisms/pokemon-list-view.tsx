import React from "react";
import ViewSwitch from "Components/templates/viewswitch";
import MobilePokemonList from "Components/organisms/mobile-pokemon-list";
import DesktopPokemonList from "Components/organisms/desktop-pokemon-list";

interface IPokemonListView {
  pokemonList: any;
  onSelect: (id: number) => void;
}

const PokemonListView = (props: IPokemonListView) => {
  return (
    <div className="md:flex md:flex-wrap">
      {props.pokemonList.data.map((data: any, index: number) => (
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
              />
            }
            mobile={
              <MobilePokemonList
                data={data}
                key={index}
                onSelect={props.onSelect}
                id={index}
              />
            }
          />
        </div>
      ))}
    </div>
  );
};

export default PokemonListView;
