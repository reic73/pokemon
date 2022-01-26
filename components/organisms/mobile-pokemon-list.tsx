import { setUser } from "Redux/reducers/user/action";
import React from "react";
import { retrievePokemonLists } from "Redux/reducers/pokemon/action";
import Image from "next/image";
import ViewSwitch from "Components/templates/viewswitch";

const MobilePokemonList = (props: any) => {
  return (
    <div>
      <ViewSwitch
        desktop={<div></div>}
        mobile={
          <div
            className={`flex my-2 p-2 rounded-xl justify-between ${
              props.index % 2 == 0 ? "bg-blue-50" : " border-2 border-blue-100"
            }`}
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
                {props.data.name.toUpperCase()}
              </div>
            </div>
            <div className="flex items-center">
              <div className="p-1 text-sm font-bold">0</div>
            </div>
          </div>
        }
      />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user.user,
  pokemonLists: state.pokemon.pokemonLists,
});

const mapDispatchToProps = (dispatch: any) => ({
  setUser: (user: any) => dispatch(setUser(user)),
  retrievePokemonLists: (user: any) => dispatch(retrievePokemonLists(user)),
});

export default MobilePokemonList;
