/* eslint-disable react-hooks/exhaustive-deps */
import { connect } from "react-redux";
import { setUser } from "Redux/reducers/user/action";
import React, { useEffect, useState } from "react";
import Request from "Api/request";
import { retrievePokemonDetails } from "Redux/reducers/pokemon/action";
import Layout from "Components/templates/layout";
import ViewSwitch from "Components/templates/viewswitch";
import MobilePokemonDetail from "Components/organisms/mobile-pokemon-detail";
import DesktopPokemonDetail from "Components/organisms/desktop-pokemon-detail";
import { useRouter } from "next/router";
import { isJson } from "Helpers/common-helper";
import DialogBox from "Components/molecules/dialog-box";
import SnackBar from "Components/molecules/notification";

const PokemonList = (props: any) => {
  const localStorageKey = "myPokemon";
  const router = useRouter();
  const pokemonData = props.pokemonDetails;
  const [pokemonId, setPokemonId] = useState("0");
  const [probability, setProbability] = useState(2); // 0:lose 1:win 2:neutral
  const [name, setName] = useState("");
  const [openSnackBar, setOpenSnackBar] = useState(false);

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
  };

  const handleCatch = () => {
    const randomNumber = Math.floor(Math.random() * 2);
    setProbability(randomNumber);
  };

  const handleInputChange = (e: any) => {
    setName(e.currentTarget.value);
  };

  const handleKeep = () => {
    const prevUserState = props.user;
    const isNewPokemon = prevUserState[`${pokemonData.id}`] == undefined;
    if (name == "") {
      alert("Name cannot be empty");
      return;
    }

    if (isNewPokemon) {
      prevUserState[`${pokemonData.id}`] = {
        names: [`${name}`],
        data: {
          id: pokemonData.id,
          name: pokemonData.name,
          image: pokemonData.image,
        },
      };
      const toBeStored = JSON.stringify(prevUserState);

      setOpenSnackBar(true);
      sessionStorage.setItem(localStorageKey, toBeStored);
    } else {
      const existingPokemonNames = prevUserState[`${pokemonData.id}`]["names"];
      const isUseableName = !existingPokemonNames.includes(name);

      if (isUseableName) {
        existingPokemonNames.push(name);
        prevUserState[`${pokemonData.id}`]["names"] = existingPokemonNames;
        const toBeStored = JSON.stringify(prevUserState);

        setOpenSnackBar(true);
        sessionStorage.setItem(localStorageKey, toBeStored);
      } else {
        alert("Pokemon name already exist. Please use another one !");
      }
    }

    setProbability(2);
    setName("");
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

  useEffect(() => {
    const getsession = sessionStorage.getItem(localStorageKey);
    if (getsession && isJson(getsession)) {
      const sessionObject = JSON.parse(getsession);
      props.setUser(sessionObject);
    }
  }, [props.setUser]);

  return (
    <Layout title={`Pokemon | ${pokemonData.name ? pokemonData.name : ""}`}>
      {console.log("pokemon data", pokemonData)}
      {console.log("user", props.user)}
      <SnackBar
        onClose={() => {
          setOpenSnackBar(false);
        }}
        isOpen={openSnackBar}
      />
      {pokemonId != "0" ? (
        <ViewSwitch
          desktop={
            <DesktopPokemonDetail
              data={pokemonData}
              onClick={handleCatch}
              disabled={probability != 2}
            />
          }
          mobile={
            <MobilePokemonDetail
              data={pokemonData}
              onClick={handleCatch}
              disabled={probability != 2}
            />
          }
        />
      ) : null}

      <DialogBox
        isOpen={probability == 1}
        title={`${pokemonData.name} is successfully catched!`}
        text="Please give new name:"
        value={name}
        onInputChange={handleInputChange}
        onKeep={handleKeep}
        onKeepText="Keep"
        onClose={handleClose}
        onCloseText="Release"
      />

      <DialogBox
        isOpen={probability == 0}
        title={`${pokemonData.name} is failed to be catched!`}
        text={`Don't worry you can try catch 'em again`}
        onClose={handleClose}
        onCloseText="close"
        type="notification"
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
