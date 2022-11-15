import { PropsWithChildren } from "react";
import clx from "classnames";

type Color =
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose";

type ButtonProps = PropsWithChildren<{ size?: "sm" | "md"; variantColor?: Color }> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, size = "md", variantColor = "blue", ...rest } = props;

  return (
    <button
      className={clx(
        "rounded-md text-white",
        rest.disabled
          ? `bg-${variantColor}-200 cursor-not-allowed`
          : `bg-${variantColor}-500 hover:bg-${variantColor}-600 active:bg-${variantColor}-700`,
        {
          "px-3 py-1 text-sm": size === "sm",
          "px-5 py-2 text-base": size === "md",
        }
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
