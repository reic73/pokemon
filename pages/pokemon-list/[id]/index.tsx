import { connect } from "react-redux";
import { setUser } from "Redux/reducers/user/action";
import React, { useEffect, useState, useRef } from "react";
import Request from "Api/request";
import { retrievePokemonDetails } from "Redux/reducers/pokemon/action";
import Layout from "Components/templates/layout";
import ViewSwitch from "Components/templates/viewswitch";
import MobilePokemonDetail from "Components/organisms/mobile-pokemon-detail";
import DesktopPokemonDetail from "Components/organisms/desktop-pokemon-detail";
import Pagination from "Components/templates/pagination";
import { useRouter } from "next/router";

const PokemonList = (props: any) => {
  const router = useRouter();
  const pokemonData = props.pokemonDetails;
  const [pokemonId, setPokemonId] = useState("0");
  const asyncRequest = async (
    requestFunction: Promise<any>,
    setState: (data: any) => void
  ) => {
    const response = await requestFunction;

    if (response != undefined) {
      setState(response);
      setPokemonId(response.id);
    }
  };

  useEffect(() => {
    const id = router?.query.id;
    if (id != "" && id != undefined) {
      asyncRequest(
        Request.retrievePokemonDetails(id),
        props.retrievePokemonDetails
      );
    }
  }, [router, props.retrievePokemonDetails]);

  return (
    <Layout title={`Pokemon | ${pokemonData.name ? pokemonData.name : ""}`}>
      {pokemonId != "0" ? (
        <ViewSwitch
          desktop={<DesktopPokemonDetail data={pokemonData} />}
          mobile={<MobilePokemonDetail data={pokemonData} />}
        />
      ) : null}
    </Layout>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user.user,
  pokemonDetails: state.pokemon.pokemonDetails,
});

const mapDispatchToProps = (dispatch: any) => ({
  setUser: (user: any) => dispatch(setUser(user)),
  retrievePokemonDetails: (data: any) => dispatch(retrievePokemonDetails(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
