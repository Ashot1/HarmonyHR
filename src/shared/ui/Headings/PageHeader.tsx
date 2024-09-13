import { HTMLAttributes } from 'react'
import { cn } from '@/shared/lib/utils'

export default function PageHeader({
   className,
   children,
   ...props
}: HTMLAttributes<HTMLDivElement>) {
   return (
      <div
         className={cn(
            'w-dvw pt-4 px-[7%] min-h-20 bg-[rgba(218,230,242,1)]',
            className
         )}
         {...props}
      >
         {children}
      </div>
   )
}
