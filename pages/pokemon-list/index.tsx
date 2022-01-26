import { connect } from "react-redux";
import { setUser } from "Redux/reducers/user/action";
import React, { useEffect, useState, useRef } from "react";
import Request from "Api/request";
import { retrievePokemonLists } from "Redux/reducers/pokemon/action";
import Layout from "Components/templates/layout";
import Image from "next/image";
import ViewSwitch from "Components/templates/viewswitch";
import MobilePokemonList from "Components/organisms/mobile-pokemon-list";
import Pagination from "Components/templates/pagination";

const PokemonList = (props: any) => {
  const pokemonList = props.pokemonLists;
  const [page, setPage] = useState(1);
  const prize = useRef<null | HTMLDivElement>(null);
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
    prize.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }, [props.retrievePokemonLists, page]);

  return (
    <Layout title="Pokemon List">
      <div ref={prize}>
        {pokemonList.data.map((data: any, index: number) => (
          <div key={index}>
            <ViewSwitch
              desktop={<div>desktop</div>}
              mobile={<MobilePokemonList data={data} key={index} />}
            />
          </div>
        ))}
      </div>

      <Pagination page={page} setPage={setPage} maxPage={pokemonList.maxPage} />
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
