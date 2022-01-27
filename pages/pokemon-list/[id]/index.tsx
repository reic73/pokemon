/* eslint-disable react-hooks/exhaustive-deps */
import { connect } from "react-redux";
import { setUser } from "Redux/reducers/user/action";
import React, { useEffect, useState, useRef } from "react";
import Request from "Api/request";
import { retrievePokemonDetails } from "Redux/reducers/pokemon/action";
import Layout from "Components/templates/layout";
import ViewSwitch from "Components/templates/viewswitch";
import MobilePokemonDetail from "Components/organisms/mobile-pokemon-detail";
import DesktopPokemonDetail from "Components/organisms/desktop-pokemon-detail";
import { useRouter } from "next/router";
import { isJson } from "Helpers/common-helper";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const PokemonList = (props: any) => {
  const router = useRouter();
  const pokemonData = props.pokemonDetails;
  const [pokemonId, setPokemonId] = useState("0");
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [name, setName] = useState("");
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

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 2);
    setIsOpenDialog(!!randomNumber);
  };

  const codeChange = (e: any) => {
    setName(e.currentTarget.value);
  };

  const handleCatch = () => {
    const newNickName = name;
    const prevUserState = props.user;

    const isNewPokemon = prevUserState[`${pokemonData.id}`] == undefined;

    if (isNewPokemon) {
      prevUserState[`${pokemonData.id}`] = [`${newNickName}`];
      const toBeStored = JSON.stringify(prevUserState);

      sessionStorage.setItem("pokeItem", toBeStored);
    } else {
      const existingPokemonName = prevUserState[`${pokemonData.id}`];
      const isUseableNickName = !existingPokemonName.includes(newNickName);

      if (isUseableNickName) {
        existingPokemonName.push(newNickName);

        prevUserState[`${pokemonData.id}`] = existingPokemonName;

        const toBeStored = JSON.stringify(prevUserState);

        sessionStorage.setItem("pokeItem", toBeStored);
      }
    }
    setIsOpenDialog(false);
    setName("");
  };

  useEffect(() => {
    const getsession = sessionStorage.getItem("pokeItem");
    if (getsession && isJson(getsession)) {
      const getsessionOb = JSON.parse(getsession);

      props.setUser(getsessionOb);
    }
  }, [props.setUser]);

  return (
    <Layout title={`Pokemon | ${pokemonData.name ? pokemonData.name : ""}`}>
      {pokemonId != "0" ? (
        <ViewSwitch
          desktop={
            <DesktopPokemonDetail
              data={pokemonData}
              onClick={handleClick}
              disabled={isOpenDialog}
            />
          }
          mobile={
            <MobilePokemonDetail
              data={pokemonData}
              onClick={handleClick}
              disabled={isOpenDialog}
            />
          }
        />
      ) : null}

      <Dialog open={isOpenDialog}>
        <DialogTitle>{pokemonData.name} is successfully Catched!</DialogTitle>
        <DialogContent>
          <DialogContentText>Please give new name:</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="email"
            fullWidth
            variant="standard"
            onChange={codeChange}
            value={name}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsOpenDialog(false)}>Release</Button>
          <Button onClick={handleCatch}>Keep</Button>
        </DialogActions>
      </Dialog>
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
