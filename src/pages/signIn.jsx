import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Geçersiz e-mail adresi").required("Zorunlu alan"),
  password: Yup.string().min(6, "Şifreniz çok kısa").required("Şifre gerekli"),
});

const signIn = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-6 align-self-center">
          <Card>
            <CardBody>
              <CardTitle tag="h5">QR Yoklama Yönetim</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Giriş Sayfası
              </CardSubtitle>
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ handleSubmit, handleChange, values, errors }) => (
                  <Form onSubmit={handleSubmit}>
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="email giriniz"
                        type="email"
                        onChange={handleChange}
                        values={values.email}
                      />
                      {errors.email && errors.email ? (
                        <div className="text-danger">* {errors.email}</div>
                      ) : null}
                      <Label className="mt-2" for="examplePassword">Şifre</Label>
                      <Input
                        id="examplePassword"
                        name="password"
                        placeholder="şifre giriniz"
                        type="password"
                        onChange={handleChange}
                        values={values.password}
                      />
                      {errors.password && errors.password ? (
                        <div className="text-danger">* {errors.password}</div>
                      ) : null}
                      <Button className="mt-2" color="primary">Giriş Yap</Button>
                    </FormGroup>
                  </Form>
                )}
              </Formik>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default signIn;
