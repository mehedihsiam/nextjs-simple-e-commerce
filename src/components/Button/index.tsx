import React from "react";
import styles from "./button.module.css";

type DefaultProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ButtonProps extends DefaultProps {
  children: React.ReactNode;
  variant: "outlined" | "filled" | "whiteFilled" | "whiteOutlined";
}

const Button = (props: ButtonProps) => {
  return (
    <button className={styles[props.variant]} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
