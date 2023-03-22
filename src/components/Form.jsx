import { Form as FormikForm } from "formik"

const Form = (props) => (
  <FormikForm className="flex flex-col gap-4" {...props} noValidate />
)

export default Form
