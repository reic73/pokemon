import { connect } from "react-redux";
import { setUser } from "Redux/reducers/user/action";
import React, { useEffect, useState, useRef } from "react";
import Request from "Api/request";
import { retrievePokemonLists } from "Redux/reducers/pokemon/action";
import Layout from "Components/templates/layout";
import ViewSwitch from "Components/templates/viewswitch";
import MobilePokemonList from "Components/organisms/mobile-pokemon-list";
import DesktopPokemonList from "Components/organisms/desktop-pokemon-list";
import Pagination from "Components/templates/pagination";
import { useRouter } from "next/router";

const PokemonList = (props: any) => {
  const router = useRouter();
  useEffect(() => {
    const id = router.query.id;
    if (id != "" && id != undefined) {
      Request.retrievePokemonDetails(2);
    }
  }, [router]);
  return <Layout title="Pokemon List">test2</Layout>;
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
