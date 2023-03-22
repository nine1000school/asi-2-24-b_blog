import Button from "@/components/Button.jsx"
import Form from "@/components/Form.jsx"
import FormField from "@/components/FormField.jsx"
import Page from "@/components/Page.jsx"
import { Formik } from "formik"
import * as yup from "yup"

const validationSchema = yup.object().shape({
  email: yup.string().email().required().label("E-mail"),
  password: yup.string().required().label("Password"),
})

const SignInPage = () => {
  const handleSubmit = (values) => {
    console.log(values)
  }

  return (
    <Page title="Sign in">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <FormField
            type="email"
            name="email"
            label="E-mail"
            placeholder="Enter your e-mail"
          />
          <FormField
            type="password"
            name="password"
            label="Password"
            placeholder="Enter your password"
          />
          <Button className="mt-8">Sign In</Button>
        </Form>
      </Formik>
    </Page>
  )
}

export default SignInPage
