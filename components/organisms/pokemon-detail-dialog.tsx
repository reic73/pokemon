/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import DialogBox from "Components/molecules/dialog-box";

interface IPokemonDetailDialog {
  probability: number;
  pokemonName: string;
  inputValue: string;
  onChange: (e: any) => void;
  onKeep: () => void;
  onClose: () => void;
}

const PokemonDetailDialog = (props: IPokemonDetailDialog) => {
  return (
    <div>
      <DialogBox
        isOpen={props.probability == 1}
        title={`${props.pokemonName} is successfully catched!`}
        text="Please give new name:"
        value={props.inputValue}
        onInputChange={props.onChange}
        onKeep={props.onKeep}
        onKeepText="Keep"
        onClose={props.onClose}
        onCloseText="Release"
      />

      <DialogBox
        isOpen={props.probability == 0}
        title={`${props.pokemonName} is failed to be catched!`}
        text={`Don't worry you can try catch 'em again`}
        value={props.inputValue}
        onClose={props.onClose}
        onCloseText="close"
        type="notification"
      />
    </div>
  );
};

export default PokemonDetailDialog;
