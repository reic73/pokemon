import { connect } from "react-redux";
import { setUser } from "Redux/reducers/user/action";
import React, { useEffect, useState } from "react";
import Request from "Api/request";
import { retrievePokemonLists } from "Redux/reducers/pokemon/action";
import Layout from "Components/templates/layout";
import Image from "next/image";
import ViewSwitch from "Components/templates/viewswitch";
import MobilePokemonList from "Components/organisms/mobile-pokemon-list";

const PokemonList = (props: any) => {
  const pokemonList = props.pokemonLists;
  const [page, setPage] = useState(0);
  const asyncRequest = async (
    requestFunction: Promise<any>,
    setState: (data: any) => void
  ) => {
    const response = await requestFunction;
    setState(response);
  };

  useEffect(() => {
    asyncRequest(
      Request.retrievePokemonLists(page),
      props.retrievePokemonLists
    );
  }, [props.retrievePokemonLists, page]);

  return (
    <Layout title="Pokemon List">
      <div>
        {pokemonList.map((data: any, index: number) => (
          <div key={index}>
            <ViewSwitch
              desktop={<div>desktop</div>}
              mobile={
                <MobilePokemonList data={data} key={index} index={index} />
              }
            />
          </div>
        ))}
      </div>
    </Layout>
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

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
