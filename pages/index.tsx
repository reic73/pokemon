import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import Request from "Api/request";
import { retrievePokemonLists } from "Redux/reducers/pokemon/action";
import Layout from "Components/templates/layout";
import Pagination from "Components/templates/pagination";
import { useRouter } from "next/router";
import PokemonListView from "Components/organisms/pokemon-list-view";
import { createQuery } from "Helpers/query-helper";

const PokemonList = (props: any) => {
  const router = useRouter();
  const pokemonList = props.pokemonLists;
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20)
  const refElement = useRef<null | HTMLDivElement>(null);

  const handleSelect = (id: number) => {
    const query = createQuery({
      id,
    });
    router.push(`/detail/`, `/detail/` + query, {
      shallow: true,
    });
    // router.push(`/pokemon-list/${id}`);
  };
  const asyncRequest = async (requestFunction: Promise<any>, setState: any) => {
    const response = await requestFunction;
    setState(response);
  };

  useEffect(() => {
    asyncRequest(
      Request.retrievePokemonLists(page, perPage),
      props.retrievePokemonLists
    );

    refElement.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }, [props.retrievePokemonLists, page, perPage]);

  return (
    <Layout title="Pokemon List">
      <div
        className="flex justify-center text-2xl font-bold py-2 text-red-500"
        ref={refElement}
      >
        Pokemon Lists
      </div>

      <PokemonListView pokemonList={pokemonList} onSelect={handleSelect} />

      <Pagination 
      page={page} 
      setPage={setPage} 
      perPage = {perPage}
      setPerPage = {setPerPage}
      maxPage={pokemonList.maxPage} />
      
    </Layout>
  );
};

const mapStateToProps = (state: any) => ({
  pokemonLists: state.pokemon.pokemonLists,
});

const mapDispatchToProps = (dispatch: any) => ({
  retrievePokemonLists: (data: any) => dispatch(retrievePokemonLists(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
