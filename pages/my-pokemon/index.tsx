import { connect } from "react-redux";
import React, { useEffect, useState, useRef } from "react";
import Request from "Api/request";
import { setUser } from "Redux/reducers/user/action";
import { retrievePokemonLists } from "Redux/reducers/pokemon/action";
import Layout from "Components/templates/layout";
import ViewSwitch from "Components/templates/viewswitch";
import MobilePokemonList from "Components/organisms/mobile-pokemon-list";
import DesktopPokemonList from "Components/organisms/desktop-pokemon-list";
import Pagination from "Components/templates/pagination";
import { useRouter } from "next/router";
import { isJson, getPokemonDataFromStorage } from "Helpers/common-helper";
import SnackBar from "Components/molecules/notification";

const MyPokemon = (props: any) => {
  const localStorageKey = "myPokemon";
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [pokemonData, setPokemonData] = useState<{
    data: any[];
    maxPage: number;
  }>({
    data: [],
    maxPage: 1,
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
  }, [props.retrievePokemonLists, page]);

  const handleSelect = (id: number) => {
    router.push(`/pokemon-list/${id}`);
  };

  const handleRelease = (data: any) => {
    const prevUserState = props.user;
    console.log("handle release", data);
    const releaseId = data.id;
    const releaseName = data.name;

    const prevPokemonNames = prevUserState[`${releaseId}`]["names"];
    const releaseIndex = prevPokemonNames.indexOf(releaseName);

    const updatedPokemonNames = prevPokemonNames.filter(
      (value: string) => value != releaseName
    );
    prevUserState[`${releaseId}`]["names"] = updatedPokemonNames;
    console.log("release index", releaseIndex);

    const toBeStored = JSON.stringify(prevUserState);
    console.log("toBe stored", toBeStored);

    setOpenSnackBar(true);
    sessionStorage.setItem(localStorageKey, toBeStored);
  };

  useEffect(() => {
    const getsession = sessionStorage.getItem(localStorageKey);
    if (getsession && isJson(getsession)) {
      const sessionObject = JSON.parse(getsession);
      props.setUser(sessionObject);
      const data = getPokemonDataFromStorage(sessionObject);
      setPokemonData(data);
      console.log("data", data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.setUser]);

  return (
    <Layout title="My Pokemon">
      <SnackBar
        onClose={() => {
          setOpenSnackBar(false);
        }}
        isOpen={openSnackBar}
      />
      <div
        className="flex justify-center text-2xl font-bold py-2 text-red-500"
        ref={refElement}
      >
        My Pokedex
      </div>

      {console.log("setUser", props.user)}
      <div className="md:flex md:flex-wrap">
        {pokemonData.data.map((data: any, index: number) => (
          <div
            key={index}
            className="lg:w-1/5 md:w-1/3 md:p-1 lg:my-5 lg:p-2 my-3"
          >
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
                  id={index}
                  isMyPokedexPage={true}
                  onRelease={handleRelease}
                />
              }
            />
          </div>
        ))}
      </div>

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
