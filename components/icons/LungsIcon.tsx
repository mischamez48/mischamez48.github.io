import React from 'react';

interface LungsIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function LungsIcon({ width = 28, height = 28, className = "" }: LungsIconProps) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M12 3C12 3 10.5 4.5 9 6C7.5 7.5 6 9 6 12C6 15 7.5 16.5 9 18C10.5 19.5 12 21 12 21C12 21 13.5 19.5 15 18C16.5 16.5 18 15 18 12C18 9 16.5 7.5 15 6C13.5 4.5 12 3 12 3Z" 
        fill="#FF6B6B" 
        stroke="#E55656" 
        strokeWidth="1"
      />
      <path 
        d="M8 8C7 8 6 9 6 10.5C6 12 7 13 8 13C9 13 10 12 10 10.5C10 9 9 8 8 8Z" 
        fill="#FF8E8E"
      />
      <path 
        d="M16 8C15 8 14 9 14 10.5C14 12 15 13 16 13C17 13 18 12 18 10.5C18 9 17 8 16 8Z" 
        fill="#FF8E8E"
      />
      <path 
        d="M12 6V18" 
        stroke="#E55656" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      <circle cx="9" cy="10" r="1.5" fill="#FFAAAA"/>
      <circle cx="15" cy="10" r="1.5" fill="#FFAAAA"/>
    </svg>
  );
} 