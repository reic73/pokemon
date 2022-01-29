/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import ViewSwitch from "Components/templates/viewswitch";
import MobilePokemonDetail from "Components/organisms/mobile-pokemon-detail";
import DesktopPokemonDetail from "Components/organisms/desktop-pokemon-detail";

interface IPokemonDetailView {
  data: any;
  onClick: () => void;
  probability: number;
}
const PokemonDetailView = (props: IPokemonDetailView) => {
  return (
    <ViewSwitch
      desktop={
        <DesktopPokemonDetail
          data={props.data}
          onClick={props.onClick}
          disabled={props.probability != 2}
        />
      }
      mobile={
        <MobilePokemonDetail
          data={props.data}
          onClick={props.onClick}
          disabled={props.probability != 2}
        />
      }
    />
  );
};

export default PokemonDetailView;
