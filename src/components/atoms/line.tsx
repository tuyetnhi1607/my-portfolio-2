import * as React from 'react';

export interface ILineProps {
  icon: React.ReactNode;
  color: string;
  iconPosition: "top" | "center";
  iconColor: string;
  type: 'primary' | 'secondary';
}

export function Line (props: ILineProps) {
  return (
    <div className='flex w-1 flex-col gap-2'>
      
    </div>
  );
}
