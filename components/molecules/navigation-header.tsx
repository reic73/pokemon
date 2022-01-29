/* eslint-disable @next/next/no-img-element */
import React from "react";
import TextButton from "Components/atoms/button-text";
import ColorConstant from "Constants/colors";
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
        <img
          src="/pokemon-logo.png"
          alt="pokemon-logo"
          style={{ width: "80px" }}
        />
      </div>
      <div className="flex items-center">
        {router.pathname != "/my-pokemon" ? (
          <ViewSwitch
            desktop={
              <div
                className="text-white font-semibold text-lg cursor-pointer"
                onClick={() => router.push("/my-pokemon")}
              >
                My Pokemon
              </div>
            }
            mobile={
              <div
                className="flex items-center cursor-pointer px-2"
                onClick={() => router.push("/my-pokemon")}
              >
                <img
                  src="/pokeball-line.png"
                  alt="pokemon-ball"
                  style={{ width: "30px" }}
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
