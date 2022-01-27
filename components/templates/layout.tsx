import React from "react";
import Head from "next/head";
import NavigationHeader from "Components/molecules/navigation-header";
import ViewSwitch from "Components/templates/viewswitch";

interface ILayout {
  children: any;
  title: string;
}
const Layout = (props: ILayout) => {
  return (
    <div className="relative">
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/pokeball.png" />
      </Head>
      <NavigationHeader />
      <ViewSwitch
        desktop={<div className="pt-20 px-20">{props.children}</div>}
        mobile={<div className="pt-28 px-8">{props.children}</div>}
      />
    </div>
  );
};

export default Layout;
