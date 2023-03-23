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
  firstName: yup.string().min(1).trim().required().label("First name"),
  lastName: yup.string().min(1).trim().required().label("Last name"),
  email: yup.string().email().trim().required().label("E-mail"),
  password: yup.string().min(8).required().label("Password"),
})

const SignUpPage = () => {
  const [error, setError] = useState(null)
  const router = useRouter()
  const {
    actions: { signUp },
  } = useContext(AppContext)
  const handleSubmit = async (values) => {
    setError(null)

    const [error, result] = await signUp(values)

    if (result) {
      router.push("/sign-in")

      return
    }

    setError(error)
  }

  return (
    <Page title="Sign up">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <ErrorMessage>{error}</ErrorMessage>
          <FormField
            name="firstName"
            label="First name"
            placeholder="Enter your first name"
          />
          <FormField
            name="lastName"
            label="Last name"
            placeholder="Enter your last name"
          />
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
            Sign up
          </Button>
        </Form>
      </Formik>
    </Page>
  )
}

export default SignUpPage
