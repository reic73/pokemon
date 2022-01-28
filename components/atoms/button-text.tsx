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

const TextButton = (props: IButtonContained) => {
  const CustomTextButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(ColorConstant.valencia),
  }));

  return (
    <div className="w-full mx-2">
      <CustomTextButton
        onClick={props.onClick}
        fullWidth={props.fullWidth}
        disabled={props.disabled}
      >
        <span className="font-semibold text-lg">{props.children}</span>
      </CustomTextButton>
    </div>
  );
};

export default TextButton;
