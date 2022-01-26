import { Hidden } from "@material-ui/core";
import React from "react";

interface IView {
  desktop: JSX.Element;
  mobile: JSX.Element;
}
const ViewSwitch = (props: IView) => {
  return (
    <React.Fragment>
      <Hidden smDown implementation="css">
        {props.desktop}
      </Hidden>
      <Hidden mdUp implementation="css">
        {props.mobile}
      </Hidden>
    </React.Fragment>
  );
};
export default ViewSwitch;
