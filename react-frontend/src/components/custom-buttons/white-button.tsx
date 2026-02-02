import React, { type ButtonHTMLAttributes, type CSSProperties } from "react";

export interface WhiteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** When true renders the read variant with an eye icon */
  read?: boolean;
  /** When true renders the update variant with a pencil icon */
  update?: boolean;
}

const EyeIcon = () => (
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
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const PencilIcon = () => (
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
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

/**
 * WhiteButton - a small, reusable button styled for read and update actions
 * - Use the `read` prop to show the eye icon and read styling
 * - Use the `update` prop to show the pencil icon and update styling
 */
export default function WhiteButton({ read: isRead, update: isUpdate, children, className = "", disabled, ...props }: WhiteButtonProps) {
  const base = {display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '8px 16px', borderRadius: '6px', fontWeight: 'bold', fontSize: '14px', transition: 'all 0.15s ease-in-out', outline: 'none'};

  const readStyle = {backgroundColor: '#ffffff', color: '#374151', border: '1px solid #d1d5db', borderBottom: '4px solid #9ca3af'};
  const updateStyle = {backgroundColor: '#ffffff', color: '#374151', border: '1px solid #d1d5db', borderBottom: '4px solid #9ca3af'};
  const neutralStyle = {backgroundColor: '#f9fafb', color: '#6b7280', border: '1px solid #e5e7eb'};

  let style: CSSProperties = isRead || isUpdate ? {...base, ...(isRead ? readStyle : updateStyle)} : {...base, ...neutralStyle};

  if (disabled) {
    style = {...style, opacity: 0.6};
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isRead || isUpdate) {
      e.currentTarget.style.backgroundColor = '#f3f4f6';
    } else {
      e.currentTarget.style.backgroundColor = '#f9fafb';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isRead || isUpdate) {
      e.currentTarget.style.backgroundColor = '#ffffff';
    } else {
      e.currentTarget.style.backgroundColor = '#f9fafb';
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isRead || isUpdate) {
      e.currentTarget.style.transform = 'translateY(2px)';
      e.currentTarget.style.borderBottom = '0';
    }
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isRead || isUpdate) {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderBottom = '4px solid #9ca3af';
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
      aria-pressed={(isRead || isUpdate) ? undefined : false}
      disabled={disabled}
      {...props}
    >
      {isRead && <EyeIcon />}
      {isUpdate && <PencilIcon />}
      {children || (isRead ? "Read" : isUpdate ? "Update" : "Action")}
    </button>
  );
}
