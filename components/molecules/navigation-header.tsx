import React from "react";
import TextButton from "Components/atoms/button-text";
import ColorConstant from "Constants/colors";
import Image from "next/image";
import { useRouter } from "next/router";
import ViewSwitch from "Components/templates/viewswitch";

const NavigationHeader = () => {
  const router = useRouter();

  return (
    <div
      className="w-screen h-20 px-12 flex justify-between absolute md:fixed"
      style={{
        backgroundColor: ColorConstant.valencia,
        boxShadow: `0px 5px 10px ${ColorConstant.eerieBlack}`,
        zIndex: 10,
      }}
    >
      <div
        className="flex items-center cursor-pointer"
        onClick={() => router.push("/pokemon-list")}
      >
        <Image
          src="/pokemon-logo.png"
          alt="pokemon-list"
          width={80}
          height={30}
          className="absolute z-0"
        />
      </div>
      <div className="flex items-center">
        {router.pathname != "/my-pokemon" ? (
          <ViewSwitch
            desktop={
              <TextButton onClick={() => router.push("/my-pokemon")}>
                My Pokedex
              </TextButton>
            }
            mobile={
              <div
                className="flex items-center cursor-pointer px-2"
                onClick={() => router.push("/my-pokemon")}
              >
                <Image
                  src="/pokeball-line.png"
                  alt="pokemon-ball"
                  width={30}
                  height={30}
                  className="absolute z-0"
                />
              </div>
            }
          />
        ) : null}
      </div>
    </div>
  );
};

export default NavigationHeader;
