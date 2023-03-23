import clsx from "clsx"

const variants = {
  primary: "bg-blue-600 active:bg-blue-700 text-white",
  secondary: "active:bg-neutral-100",
  transparent: "",
}

const sizes = {
  inherit: "",
  md: "px-3 py-1.5 text-lg font-semibold",
}

const Button = (props) => {
  const {
    variant = "primary",
    size = "md",
    square = false,
    className,
    ...otherProps
  } = props

  return (
    <button
      className={clsx(
        { "rounded-sm": !square },
        variants[variant],
        sizes[size],
        className
      )}
      {...otherProps}
    />
  )
}

export default Button
