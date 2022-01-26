import React from "react";
import { TextButton } from "Components/atoms/button-text";
import ColorConstant from "Constants/colors";
import Image from "next/image";

const NavigationHeader = () => {
  const buttonStyle = "pl-10 text-white text-lg";
  return (
    <div
      className="w-screen h-20 px-12 flex justify-between absolute"
      style={{
        backgroundColor: ColorConstant.valencia,
        boxShadow: `0px 5px 10px ${ColorConstant.eerieBlack}`,
        zIndex: 9999,
      }}
    >
      <div className="flex items-center">
       <Image
            src="/pokemon-logo.png"
            alt="pokemon-list"
            width={100}
            height={50}
            className="absolute z-0"
          />
      </div>
      <div className="flex items-center">
        <TextButton customClassName={buttonStyle}>Pokemon List</TextButton>
        <TextButton customClassName={buttonStyle}>My Pokemon</TextButton>
      </div>
    </div>
  );
};

export default NavigationHeader;