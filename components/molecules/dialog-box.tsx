/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import ButtonContained from "Components/atoms/button-contained";
import ButtonOutlined from "Components/atoms/button-outlined";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";

interface IDialogBox {
  isOpen: boolean;
  title: string;
  text: string;
  value: string;
  onInputChange?: (e: any) => void;
  onKeep?: () => void;
  onKeepText?: string;
  onClose: () => void;
  onCloseText: string;
  type?: "notification";
}

const DialogBox = (props: IDialogBox) => {
  const maxCharacter = 12;
  const isError = props.value?.length >= maxCharacter;
  return (
    <Dialog open={props.isOpen}>
      <DialogTitle>{props.title}</DialogTitle>

      <DialogContent>
        <DialogContentText>{props.text}</DialogContentText>
        {props.type != "notification" ? (
          <div>
            {console.log("is eror", isError)}
            <TextField
              margin="dense"
              id="name"
              label="Name"
              fullWidth
              variant="standard"
              onChange={props.onInputChange}
              value={props.value}
              error={isError}
              helperText={
                isError
                  ? `Max ${maxCharacter} characters.`
                  : `${maxCharacter - props.value?.length} characters left.`
              }
            />
          </div>
        ) : null}
      </DialogContent>

      <DialogActions>
        <div className="flex justify-end mb-2">
          <ButtonOutlined onClick={props.onClose}>
            {props.onCloseText}
          </ButtonOutlined>
          {props.type != "notification" ? (
            <ButtonContained
              onClick={props.onKeep}
              disabled={isError || props.value?.length == 0}
            >
              {props.onKeepText}
            </ButtonContained>
          ) : null}
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default DialogBox;
