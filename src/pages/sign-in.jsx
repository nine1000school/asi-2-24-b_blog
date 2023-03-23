import AppContext from "@/components/AppContext.jsx"
import Button from "@/components/Button.jsx"
import ErrorMessage from "@/components/ErrorMessage.jsx"
import Form from "@/components/Form.jsx"
import FormField from "@/components/FormField.jsx"
import Page from "@/components/Page.jsx"
import { Formik } from "formik"
import { useRouter } from "next/router.js"
import { useContext, useState } from "react"
import * as yup from "yup"

const validationSchema = yup.object().shape({
  email: yup.string().email().required().label("E-mail"),
  password: yup.string().required().label("Password"),
})

const SignInPage = () => {
  const [error, setError] = useState(null)
  const router = useRouter()
  const {
    actions: { signIn },
  } = useContext(AppContext)
  const handleSubmit = async (values) => {
    setError(null)

    const [error, result] = await signIn(values)

    if (result) {
      router.push("/")

      return
    }

    setError(error)
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
          <ErrorMessage>{error}</ErrorMessage>
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
          <Button type="submit" className="mt-8">
            Sign in
          </Button>
        </Form>
      </Formik>
    </Page>
  )
}

export default SignInPage
