import React from "react";

interface IButtonContained {
  onClick?: () => void;
  children: any;
  disabled?: boolean;
}

const ButtonContained = (props: IButtonContained) => {
  return (
    <div
      className={` w-full rounded p-2 cursor-pointer flex justify-center font-semibold text-white ${
        props.disabled ? "bg-gray-400" : "bg-red-500 hover:bg-red-700"
      }`}
      onClick={props.disabled ? () => {} : props.onClick}
    >
      {props.children}
    </div>
  );
};

export default ButtonContained;
