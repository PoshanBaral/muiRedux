    import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { object, string } from "yup";
import PersonIcon from "@mui/icons-material/Person";


const Login = () => {
  const [open, setOpen] = useState(false);

  const initialValues = {
    email: "",
    name: "",
    password: "",
  };

  const handleClose = () => {
    setOpen(false);
  };

    const handleSubmit = (values:any, { resetForm }: { resetForm: () => void }) => {
    console.log(values);
    resetForm();
    setOpen(false);
  };

  return (
    <>
       <Button variant="text" color="inherit" startIcon={<PersonIcon />}>
      <Box display="flex" justifyContent="center" alignItems="center" >
        <Button variant="contained" color="inherit" onClick={() => setOpen(true)}>LogIn</Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <DialogTitle id="dialog-title">
            <Typography variant="h5">Log In</Typography>
          </DialogTitle>
          <DialogContent>
            <Formik
              initialValues={initialValues}
              validationSchema={object({
                email: string()
                  .required("Please enter email")
                  .email("Invalid email"),
                name: string()
                  .required("Please enter name")
                  .min(3, "Name too short"),
                password: string()
                  .required("Please enter password")
                  .min(7, "Password should be minimum 7 characters long"),
              })}
              onSubmit={handleSubmit}
            >
              {({ errors, isValid, touched, dirty }) => (
                <Form>
                  <Box marginBottom={2}>
                    <Field
                      name="email"
                      type="email"
                      as={TextField}
                      variant="outlined"
                      color="primary"
                      label="Email"
                      fullWidth
                      error={Boolean(errors.email) && Boolean(touched.email)}
                      helperText={Boolean(touched.email) && errors.email}
                    />
                  </Box>
                  <Box marginBottom={2}>
                    <Field
                      name="name"
                      type="name"
                      as={TextField}
                      variant="outlined"
                      color="primary"
                      label="Name"
                      fullWidth
                      error={Boolean(errors.name) && Boolean(touched.name)}
                      helperText={Boolean(touched.name) && errors.name}
                    />
                  </Box>
                  <Box marginBottom={2}>
                    <Field
                      name="password"
                      type="password"
                      as={TextField}
                      variant="outlined"
                      color="primary"
                      label="Password"
                      fullWidth
                      error={Boolean(errors.password) && Boolean(touched.password)}
                      helperText={Boolean(touched.password) && errors.password}
                    />
                  </Box>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    disabled={!isValid || !dirty}
                  >
                    Sign In
                  </Button>
                </Form>
              )}
            </Formik>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
        </Box>
         </Button>
    </>
  );
};

export default Login;
