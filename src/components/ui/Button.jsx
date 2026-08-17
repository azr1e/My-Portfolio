import { cn } from "@/lib/utils"

function Button({ children, variant = "primary", className, as = "button", ...props }) {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition inline-block text-center"
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-800 text-white hover:bg-gray-700",
  }

  const Component = as

  return (
    <Component className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </Component>
  )
}

export default Button