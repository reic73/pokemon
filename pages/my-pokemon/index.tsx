import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import Request from "Api/request";
import Layout from "Components/templates/layout";
import SnackBar from "Components/molecules/notification";
import Pagination from "Components/templates/pagination";
import {
  getPokemonDataFromStorage,
  releasePokemon,
  getSessionStorageData,
} from "Helpers/common-helper";
import { setUser } from "Redux/reducers/user/action";
import { retrievePokemonLists } from "Redux/reducers/pokemon/action";
import { useRouter } from "next/router";
import MyPokemonView from "Components/organisms/my-pokemon-view";

const MyPokemon = (props: any) => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [pokemonData, setPokemonData] = useState<{
    data: any[];
    maxPage: number;
    totalOwned: number;
  }>({
    data: [],
    maxPage: 1,
    totalOwned: 0,
  });
  const refElement = useRef<null | HTMLDivElement>(null);

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
    refElement.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleSelect = (id: number) => {
    router.push(`/pokemon-list/${id}`);
  };

  const handleRelease = (data: any) => {
    const updatedPokemonData = releasePokemon(props.user, data, page);

    setPokemonData(updatedPokemonData);
    setOpenSnackBar(true);
  };

  useEffect(() => {
    const sessionData = getSessionStorageData();
    props.setUser(sessionData);
    const data = getPokemonDataFromStorage(sessionData, page);
    setPokemonData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <Layout title="My Pokemon">
      <SnackBar
        onClose={() => {
          setOpenSnackBar(false);
        }}
        isOpen={openSnackBar}
      />

      <div
        className="flex justify-center text-2xl font-bold pt-2 text-red-500"
        ref={refElement}
      >
        My Pokemon
      </div>
      <div className="flex justify-center font-bold  text-red-500">
        {pokemonData.totalOwned ? `${pokemonData.totalOwned} Pokemon` : ""}
      </div>

      <MyPokemonView
        pokemonData={pokemonData}
        onSelect={handleSelect}
        onRelease={handleRelease}
      />

      <Pagination page={page} setPage={setPage} maxPage={pokemonData.maxPage} />
    </Layout>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user.user,
  pokemonLists: state.pokemon.pokemonLists,
});

const mapDispatchToProps = (dispatch: any) => ({
  setUser: (user: any) => dispatch(setUser(user)),
  retrievePokemonLists: (data: any) => dispatch(retrievePokemonLists(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPokemon);
