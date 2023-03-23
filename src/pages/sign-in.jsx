import AppContext from "@/components/AppContext.jsx"
import Button from "@/components/Button.jsx"
import Form from "@/components/Form.jsx"
import FormField from "@/components/FormField.jsx"
import Page from "@/components/Page.jsx"
import { Formik } from "formik"
import { useRouter } from "next/router.js"
import { useContext } from "react"
import * as yup from "yup"

const validationSchema = yup.object().shape({
  email: yup.string().email().required().label("E-mail"),
  password: yup.string().required().label("Password"),
})

const SignInPage = () => {
  const router = useRouter()
  const {
    actions: { signIn },
  } = useContext(AppContext)
  const handleSubmit = async (values) => {
    const [error, result] = await signIn(values)

    if (result) {
      router.push("/")

      return
    }

    // TODO display error
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
          <Button className="mt-8">Sign in</Button>
        </Form>
      </Formik>
    </Page>
  )
}

export default SignInPage
