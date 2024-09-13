import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'
import { inter } from '@/shared/lib/fonts'

export type TimeOffBlockProps = {
   heading: ReactNode
   main: ReactNode
   footer?: string
   description?: string
} & HTMLAttributes<HTMLDivElement>

export default function TimeOffBlock({
   className,
   main,
   footer,
   heading,
   description,
   children,
   ...props
}: TimeOffBlockProps) {
   return (
      <div
         className={cn(
            'bg-[rgba(240,243,248,1)] rounded-lg flex flex-col items-center p-4 gap-1 font-bold',
            inter.className,
            className
         )}
         {...props}
      >
         <h5 className="text-[20px]">{heading}</h5>
         <span className="text-[rgba(28,49,68,1)] flex gap-2 items-center text-3xl justify-center">
            {main}
         </span>
         <p>{description}</p>
         <p className="text-[rgba(124,150,177,1)]">{footer}</p>
         {children}
      </div>
   )
}
