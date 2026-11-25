import type { ComponentProps, ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
} & ComponentProps<"button">

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className="bg-violet-600 text-white hover:bg-violet-500 transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed">
      {children}
    </button>
  )
}