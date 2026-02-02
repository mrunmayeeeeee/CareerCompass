import React, { type ButtonHTMLAttributes, type CSSProperties } from "react";

export interface BlueButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** When true renders the info variant with an info icon */
  info?: boolean;
}

const InfoIcon = () => (
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
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

/**
 * BlueButton - a small, reusable button styled for info actions
 * - Use the `info` prop to show the info icon and info styling
 */
export default function BlueButton({ info: isInfo, children, className = "", disabled, ...props }: BlueButtonProps) {
  const base = {display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '8px 16px', borderRadius: '6px', fontWeight: 'bold', fontSize: '14px', transition: 'all 0.15s ease-in-out', outline: 'none'};

  const infoStyle = {backgroundColor: '#2563eb', color: 'white', borderBottom: '4px solid #1d4ed8'};
  const neutralStyle = {backgroundColor: '#eff6ff', color: '#2563eb', border: '1px solid #93c5fd'};

  let style: CSSProperties = isInfo ? {...base, ...infoStyle} : {...base, ...neutralStyle};

  if (disabled) {
    style = {...style, opacity: 0.6};
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isInfo) {
      e.currentTarget.style.backgroundColor = '#1d4ed8';
    } else {
      e.currentTarget.style.backgroundColor = '#dbeafe';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isInfo) {
      e.currentTarget.style.backgroundColor = '#2563eb';
    } else {
      e.currentTarget.style.backgroundColor = '#eff6ff';
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isInfo) {
      e.currentTarget.style.transform = 'translateY(2px)';
      e.currentTarget.style.borderBottom = '0';
    }
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isInfo) {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderBottom = '4px solid #1d4ed8';
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
      aria-pressed={isInfo ? undefined : false}
      disabled={disabled}
      {...props}
    >
      {isInfo && <InfoIcon />}
      {children || (isInfo ? "Info" : "Action")}
    </button>
  );
}
