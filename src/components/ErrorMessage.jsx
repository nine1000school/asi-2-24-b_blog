import { ExclamationCircleIcon } from "@heroicons/react/24/solid"
import clsx from "clsx"

const ErrorMessage = (props) => {
  const { children, className, ...otherProps } = props

  if (!children) {
    return null
  }

  return (
    <div
      className={clsx(
        "flex items-center gap-2 rounded-sm bg-red-100 p-4 text-red-800",
        className
      )}
      {...otherProps}
    >
      <ExclamationCircleIcon className="h-6 w-6" /> {children}
    </div>
  )
}

export default ErrorMessage
