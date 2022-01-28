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

const ButtonOutlined = (props: IButtonContained) => {
  const ColorOutlinedButton = styled(Button)(() => ({
    color: ColorConstant.valencia,
    backgroundColor: ColorConstant.white,
    borderColor: ColorConstant.valencia,
    "&:hover": {
      borderColor: ColorConstant.redCarpet,
    },
  }));
  return (
    <div className="w-full mx-2">
      <ColorOutlinedButton
        onClick={props.onClick}
        fullWidth={props.fullWidth}
        disabled={props.disabled}
        variant="outlined"
      >
        {props.children}
      </ColorOutlinedButton>
    </div>
  );
};

export default ButtonOutlined;
