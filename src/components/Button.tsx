import { j } from "../libs/utils";

import { Loader2, type LucideIcon } from "lucide-react";

import type { MouseEventHandler } from "react";

interface ButtonWithIconOnly {
  icon: LucideIcon;
  text?: never;
  ariaLabel: string;
}

interface ButtonWithIconAndText {
  icon: LucideIcon;
  text: string;
  ariaLabel?: never;
}

interface ButtonWithTextOnly {
  icon?: never;
  text: string;
  ariaLabel?: never;
}

type Button = (
  | ButtonWithIconOnly
  | ButtonWithIconAndText
  | ButtonWithTextOnly
) & {
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: HTMLButtonElement["type"];
  primary?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
};

export function Button({
  primary,
  isLoading,
  disabled,
  icon: Icon,
  text,
  onClick,
  type = "button",
}: Button) {
  return (
    <button
      type={type}
      className={j(
        "focus-visible:ring-offset-body dark:focus-visible:ring-offset-body-dark flex w-full flex-grow select-none items-center justify-center rounded-lg border px-4 py-2 font-medium shadow-sm transition-all focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2",
        primary
          ? "dark:text-base-dark-950 border-primary-600 bg-primary-600 text-base-50 dark:border-primary-400 dark:bg-primary-400"
          : "dark:border-base-dark-700 dark:bg-base-dark-900 dark:text-base-dark-200 border-base-300 bg-white text-base-800",
        isLoading || disabled
          ? "cursor-not-allowed opacity-50"
          : primary
            ? "transition-all hover:border-primary-700 hover:bg-primary-700 active:scale-95 dark:hover:border-primary-300 dark:hover:bg-primary-300"
            : "dark:hover:bg-base-dark-800 transition-all hover:bg-base-100 active:scale-95",
      )}
      onClick={onClick}
      disabled={isLoading || disabled}
    >
      {isLoading ? (
        <Loader2 className="mr-1 flex-none animate-spin" />
      ) : (
        Icon && <Icon className="mr-1 flex-none" />
      )}
      {text && <span className="ml-1 mr-1 text-center leading-5">{text}</span>}
    </button>
  );
}
