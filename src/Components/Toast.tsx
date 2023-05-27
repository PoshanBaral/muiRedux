import React from "react";
import { Snackbar, Button, Alert, AlertProps } from "@mui/material";
import { useState, forwardRef } from "react";

export const Toast = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}> Submit </Button>
      <Snackbar
        message="Form submitted Successfully!"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        // anchorOrigin={{
        //     vertical: 'bottom',
        //     horizontal: 'center'
        // }}
      />
    </>
  );
};
