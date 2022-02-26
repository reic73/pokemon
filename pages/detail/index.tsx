/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Request from "Api/request";
import { connect } from "react-redux";
import { setUser } from "Redux/reducers/user/action";
import { retrievePokemonDetails } from "Redux/reducers/pokemon/action";
import Layout from "Components/templates/layout";
import SnackBar from "Components/molecules/notification";
import PokemonDetailView from "Components/organisms/pokemon-detail-view";
import PokemonDetailDialog from "Components/organisms/pokemon-detail-dialog";
import {
  isJson,
  setExistingPokemonToStorage,
  setNewPokemonToStorage,
  SESSION_KEY,
} from "Helpers/common-helper";
import { useRouter } from "next/router";
import { readQuery } from "Helpers/query-helper";

const PokemonList = (props: any) => {
  const router = useRouter();
  const pokemonData = props.pokemonDetails;
  const [name, setName] = useState("");
  const [pokemonId, setPokemonId] = useState("0");
  const [probability, setProbability] = useState(2); // 0:lose 1:win 2:neutral
  const [openSnackBar, setOpenSnackBar] = useState(false);
  let id:null|string = '0'

  useEffect(()=>{
  if (typeof window !== "undefined") {
    id = readQuery().get('id')
  }
  },[])

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

  const handleClose = () => {
    setProbability(2);
    setName("");
  };

  const handleCatch = () => {
    const randomNumber = Math.floor(Math.random() * 2);
    setProbability(randomNumber);
  };

  const handleInputChange = (e: any) => {
    setName(e.currentTarget.value);
  };

  const handleKeep = () => {
    const userData = props.user;
    const isNewPokemon = userData[`${pokemonData.id}`] == undefined;

    if (isNewPokemon) {
      setNewPokemonToStorage(userData, pokemonData, name);
      setOpenSnackBar(true);
    } else {
      const existingPokemonNames = userData[`${pokemonData.id}`]["names"];
      const isUseableName = !existingPokemonNames.includes(name);

      if (isUseableName) {
        setExistingPokemonToStorage(userData, pokemonData, name);
        setOpenSnackBar(true);
      } else {
        alert("Pokemon name already exist. Please use another one !");
        return;
      }
    }

    handleClose();
  };

  useEffect(() => {
    const getsession = sessionStorage.getItem(SESSION_KEY);
    if (getsession && isJson(getsession)) {
      const sessionObject = JSON.parse(getsession);
      props.setUser(sessionObject);
    }
  }, []);

   useEffect(() => {
    if (id) {
      asyncRequest(
        Request.retrievePokemonDetails(id),
        props.retrievePokemonDetails
      );
    }
  }, [id]);

  return (
    <Layout title={`Pokemon | ${pokemonData.name ? pokemonData.name : ""}`}>
      <SnackBar
        onClose={() => {
          setOpenSnackBar(false);
        }}
        isOpen={openSnackBar}
      />

      {pokemonId != "0" ? (
        <PokemonDetailView
          data={pokemonData}
          onClick={handleCatch}
          probability={probability}
        />
      ) : (
        <div className="border py-16 flex justify-center rounded">
          Loading Data
        </div>
      )}

      <PokemonDetailDialog
        probability={probability}
        pokemonName={pokemonData.name}
        inputValue={name}
        onChange={handleInputChange}
        onKeep={handleKeep}
        onClose={handleClose}
      />
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
