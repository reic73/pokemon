import React from "react";
interface ITextButton {
  onClick?: () => void;
  children: any;
  disabled?: boolean;
  type?: "primary" | "secondary";
  customClassName?: string;
}

export const TextButton = (props: ITextButton) => {
  let baseColor;
  switch (props.type) {
    case "primary":
      baseColor = "text-cyanBlue";
      break;
    case "secondary":
      baseColor = "text-nero";
      break;
    default:
      break;
  }
  const desktopStyle = props.disabled
    ? `text-sm font-bold ${baseColor} flex items-center justify-center`
    : `text-sm font-bold ${baseColor} cursor-pointer flex items-center justify-center`;

  return (
    <div
      style={{ whiteSpace: "nowrap" }}
      className={`${desktopStyle} ${props.customClassName}`}
      onClick={props.disabled ? () => {} : props.onClick}
    >
      {props.children}
    </div>
  );
};

TextButton.defaultProps = {
  type: "primary",
  customClassName: "",
};
