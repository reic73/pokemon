import { connect } from "react-redux";
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

  const handleSelect = (id: number) => {
    router.push(`/pokemon-list/${id}`);
  };

  return (
    <Layout title="Pokemon List">
      <div ref={prize} className="md:flex md:flex-wrap">
        {pokemonList.data.map((data: any, index: number) => (
          <div key={index} className="md:w-1/5 md:h-64 md:p-2 md:my-5 my-3">
            <ViewSwitch
              desktop={
                <DesktopPokemonList
                  data={data}
                  key={index}
                  onSelect={handleSelect}
                />
              }
              mobile={
                <MobilePokemonList
                  data={data}
                  key={index}
                  onSelect={handleSelect}
                />
              }
            />
          </div>
        ))}
      </div>

      <Pagination page={page} setPage={setPage} maxPage={pokemonList.maxPage} />
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
