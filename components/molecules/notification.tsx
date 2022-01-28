import React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

interface ISnackBar {
  onClose: () => void;
  isOpen: boolean;
}

const SnackBar = (props: ISnackBar) => {
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <div
      style={{
        zIndex: 100,
      }}
    >
      <Snackbar
        open={props.isOpen}
        autoHideDuration={3000}
        onClose={props.onClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity="success"
          onClose={props.onClose}
          sx={{ width: "100%" }}
        >
          Success update data
        </Alert>
      </Snackbar>
    </div>
  );
};
export default SnackBar;
