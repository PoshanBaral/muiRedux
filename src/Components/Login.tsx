import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  TextField,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { object, string } from "yup";

export const Login = () => {
  const [open, setOpen] = useState(false);

  const initalValues = {
    email: "",
    name: "",
    password: "",
  };

  return (
    <>
      <Box>
        <Button onClick={() => setOpen(true)}> Log In </Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <DialogTitle id="dialog-title">Log In </DialogTitle>
          <DialogContent>
            <Formik
              initialValues={initalValues}
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
              onSubmit={(values, formikHelpers) => {
                console.log(values);
                formikHelpers.resetForm();
              }}
            >
              {({ errors, isValid, touched, dirty }) => (
                <Form>
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
                  <Box height={50} />

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
                  <Box height={14} />
                  <Field
                    name="password"
                    type="password"
                    as={TextField}
                    variant="outlined"
                    color="primary"
                    label="Password"
                    fullWidth
                    error={
                      Boolean(errors.password) && Boolean(touched.password)
                    }
                    helperText={Boolean(touched.password) && errors.password}
                  />
                  <Box height={14} />

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={!isValid || !dirty}
                  >
                    Sign In
                  </Button>
                </Form>
              )}
            </Formik>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)} autoFocus>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
};
