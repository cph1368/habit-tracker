import type { ComponentProps } from "react"

 
type Variant = "primary" | "secondary" | "ghost-destructive"

type ButtonProps = {
  variant?: Variant
} & ComponentProps<"button">


export function Button({ variant = "primary", ...props }: ButtonProps) {
  return (
    <button {...props} 
    className={`${getVariantStyles(variant)} transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed`}/>
    
  )
}

function getVariantStyles(variant: Variant) {
  switch (variant) {
    case "primary":
      return "bg-violet-600 text-white hover:bg-violet-500"
    case "secondary":
      return "bg-gray-600 text-white hover:bg-gray-500"
    case "ghost-destructive":
      return "bg-transparent text-red-600 hover:bg-red-100"   

    default: 
    throw new Error(`Invalid variant: ${variant satisfies never}`)
  }
}