import React, { ButtonHTMLAttributes } from "react";

export interface RedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** When true renders the delete variant with a trash icon */
  delete?: boolean;
}

const TrashIcon = ({ className = "w-4 h-4 mr-2" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 9l-2 10m-4-10l2 10m10-11h-4.5l-1-1h-5l-1 1H4" />
  </svg>
);

/**
 * RedButton - a small, reusable button styled for destructive actions (delete)
 * - Use the `delete` prop to show the trash icon and delete styling
 */
export default function RedButton({ delete: isDelete, children, className = "", disabled, ...props }: RedButtonProps) {
  const base = "inline-flex items-center justify-center px-4 py-2 rounded-md font-bold text-sm transition-all focus:outline-none disabled:opacity-60";

  const deleteStyle = "bg-red-600 text-white hover:bg-red-700 active:translate-y-0.5 border-b-4 border-red-800 active:border-b-0";
  const neutralStyle = "bg-red-100 text-red-800 hover:bg-red-200 border border-red-200";

  const style = isDelete ? deleteStyle : neutralStyle;

  return (
    <button
      type="button"
      className={`${base} ${style} ${className}`}
      aria-pressed={isDelete ? undefined : false}
      disabled={disabled}
      {...props}
    >
      {isDelete && <TrashIcon />}
      {children || (isDelete ? "Delete" : "Action")}
    </button>
  );
}
