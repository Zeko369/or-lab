import { PropsWithChildren, useMemo } from "react";
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

export const useButtonClx = (args: Pick<ButtonProps, "size" | "variantColor" | "disabled">) => {
  const { size = "md", variantColor = "blue", disabled } = args;
  return useMemo(
    () =>
      clx(
        "rounded-md text-white",
        disabled
          ? `bg-${variantColor}-200 cursor-not-allowed`
          : `bg-${variantColor}-500 hover:bg-${variantColor}-600 active:bg-${variantColor}-700`,
        {
          "px-3 py-1 text-sm": size === "sm",
          "px-5 py-2 text-base": size === "md",
        }
      ),
    [size, variantColor, disabled]
  );
};

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, size, variantColor, className, ...rest } = props;
  const baseClassNames = useButtonClx({ size, variantColor, disabled: rest.disabled });

  return (
    <button className={`${baseClassNames} ${className}`} {...rest}>
      {children}
    </button>
  );
};
