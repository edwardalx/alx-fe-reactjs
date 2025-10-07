import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";

export default function MyForm() {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Too short").required("Required"),
  });
  return (
    <div>
      <h2>Registration Form</h2>
      <Formik
        initialValues={{ email: "", password: "", username: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="username">Username</label>
              <Field type="text" name="username" />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-600"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600"
              />
            </div>
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
      ;
    </div>
  );
}
