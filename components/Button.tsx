import React from 'react';

export default function Button({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className='py-[4px] px-5 text-md border-2 font-bold rounded hover:opacity-70 h-[36px]'
    >
      {children}
    </button>
  );
}
