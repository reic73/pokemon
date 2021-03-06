import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ColorConstant from "Constants/colors";

interface IButtonContained {
  onClick?: () => void;
  children: any;
  disabled?: boolean;
  fullWidth?: boolean;
}

const ButtonContained = (props: IButtonContained) => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(ColorConstant.valencia),
    backgroundColor: ColorConstant.valencia,
    "&:hover": {
      backgroundColor: ColorConstant.redCarpet,
    },
  }));
  return (
    <div className="w-full">
      <ColorButton
        onClick={props.onClick}
        fullWidth={props.fullWidth}
        disabled={props.disabled}
      >
        {props.children}
      </ColorButton>
    </div>
  );
};

export default ButtonContained;
