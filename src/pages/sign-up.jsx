import Button from "@/components/Button.jsx"
import Form from "@/components/Form.jsx"
import FormField from "@/components/FormField.jsx"
import Page from "@/components/Page.jsx"
import config from "@/config.js"
import axios from "axios"
import { Formik } from "formik"
import { useRouter } from "next/router.js"
import * as yup from "yup"

const validationSchema = yup.object().shape({
  firstName: yup.string().min(1).trim().required().label("First name"),
  lastName: yup.string().min(1).trim().required().label("Last name"),
  email: yup.string().email().trim().required().label("E-mail"),
  password: yup.string().min(8).required().label("Password"),
})

const SignUpPage = () => {
  const router = useRouter()
  const handleSubmit = async (values) => {
    try {
      await axios.post(`${config.api.baseURL}/sign-up`, values)
      router.push("/sign-in")
    } catch (err) {
      // TODO handle error
    }
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
