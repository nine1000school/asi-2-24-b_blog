import { useField } from "formik"

const FormField = (props) => {
  const { label, name, ...otherProps } = props
  const [field, { error, touched }] = useField({ name })

  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold">{label}</span>
      <input
        className="rounded-sm border-2 border-neutral-200 px-3 py-1.5"
        {...otherProps}
        {...field}
      />
      {touched && error && (
        <span className="text-sm text-red-500">{error}</span>
      )}
    </label>
  )
}

export default FormField
