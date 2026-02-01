import React, { type ButtonHTMLAttributes, type CSSProperties } from "react";

export interface RedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** When true renders the delete variant with a trash icon */
  delete?: boolean;
}

const TrashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    style={{width: '16px', height: '16px', marginRight: '8px'}}
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
  const base = {display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '8px 16px', borderRadius: '6px', fontWeight: 'bold', fontSize: '14px', transition: 'all 0.15s ease-in-out', outline: 'none'};

  const deleteStyle = {backgroundColor: '#dc2626', color: 'white', borderBottom: '4px solid #b91c1c'};
  const neutralStyle = {backgroundColor: '#fef2f2', color: '#dc2626', border: '1px solid #fca5a5'};

  let style: CSSProperties = isDelete ? {...base, ...deleteStyle} : {...base, ...neutralStyle};

  if (disabled) {
    style = {...style, opacity: 0.6};
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isDelete) {
      e.currentTarget.style.backgroundColor = '#b91c1c';
    } else {
      e.currentTarget.style.backgroundColor = '#fecaca';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isDelete) {
      e.currentTarget.style.backgroundColor = '#dc2626';
    } else {
      e.currentTarget.style.backgroundColor = '#fef2f2';
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isDelete) {
      e.currentTarget.style.transform = 'translateY(2px)';
      e.currentTarget.style.borderBottom = '0';
    }
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isDelete) {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderBottom = '4px solid #b91c1c';
    }
  };

  return (
    <button
      type="button"
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      aria-pressed={isDelete ? undefined : false}
      disabled={disabled}
      {...props}
    >
      {isDelete && <TrashIcon />}
      {children || (isDelete ? "Delete" : "Action")}
    </button>
  );
}
