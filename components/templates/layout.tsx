import React from "react";
import Head from "next/head";
import NavigationHeader from "Components/molecules/navigation-header";
import { getUrl } from "Helpers/common-helper";
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
        <link rel="icon" href={getUrl("/pokeball.png")} />
      </Head>
      <NavigationHeader />
      <ViewSwitch
        desktop={<div className="p-20">{props.children}</div>}
        mobile={<div className="py-28 px-8">{props.children}</div>}
      />
    </div>
  );
};

export default Layout;
