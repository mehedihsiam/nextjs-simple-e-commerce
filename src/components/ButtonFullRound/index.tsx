import React from "react"
import styles from "./button.module.css"

type DefaultProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

interface ButtonProps extends DefaultProps {
  children: React.ReactNode
  variant: "outlined" | "filled"
}

const ButtonFullRound = (props: ButtonProps) => {
  return (
    <button
      className={props.variant === "outlined" ? styles.outlined : styles.filled}
      {...props}
    >
      {props.children}
    </button>
  )
}

export default ButtonFullRound
