import React, { type ButtonHTMLAttributes, type CSSProperties } from "react";

export interface GreenButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** When true renders the create variant with a plus icon */
  create?: boolean;
}

const PlusIcon = () => (
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
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

/**
 * GreenButton - a small, reusable button styled for create actions
 * - Use the `create` prop to show the plus icon and create styling
 */
export default function GreenButton({ create: isCreate, children, className = "", disabled, ...props }: GreenButtonProps) {
  const base = {display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '8px 16px', borderRadius: '6px', fontWeight: 'bold', fontSize: '14px', transition: 'all 0.15s ease-in-out', outline: 'none'};

  const createStyle = {backgroundColor: '#16a34a', color: 'white', borderBottom: '4px solid #15803d'};
  const neutralStyle = {backgroundColor: '#f0fdf4', color: '#16a34a', border: '1px solid #86efac'};

  let style: CSSProperties = isCreate ? {...base, ...createStyle} : {...base, ...neutralStyle};

  if (disabled) {
    style = {...style, opacity: 0.6};
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isCreate) {
      e.currentTarget.style.backgroundColor = '#15803d';
    } else {
      e.currentTarget.style.backgroundColor = '#dcfce7';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isCreate) {
      e.currentTarget.style.backgroundColor = '#16a34a';
    } else {
      e.currentTarget.style.backgroundColor = '#f0fdf4';
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isCreate) {
      e.currentTarget.style.transform = 'translateY(2px)';
      e.currentTarget.style.borderBottom = '0';
    }
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isCreate) {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderBottom = '4px solid #15803d';
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
      aria-pressed={isCreate ? undefined : false}
      disabled={disabled}
      {...props}
    >
      {isCreate && <PlusIcon />}
      {children || (isCreate ? "Create" : "Action")}
    </button>
  );
}
