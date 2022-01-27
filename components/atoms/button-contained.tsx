import React from "react";

interface IButtonContained {
  onClick?: () => void;
  children: any;
  disabled?: boolean;
  type?: "primary" | "secondary";
  isFullwidth?: boolean;
  size?: "big" | "small";
}

const ButtonContained = (props: IButtonContained) => {
  return (
    <div className="bg-red-500 hover:bg-red-700 w-full rounded p-2 cursor-pointer flex justify-center font-semibold text-white">
      {props.children}
    </div>
  );
};

export default ButtonContained;
