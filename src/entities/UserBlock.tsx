import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'

export type UserBlockItemProps = {
   text: string
   icon?: ReactNode
}

export type UserBlockProps = {
   heading?: ReactNode
   footer?: ReactNode
   items: UserBlockItemProps[]
} & HTMLAttributes<HTMLDivElement>

export default function UserBlock({
   heading,
   footer,
   items,
   className,
   ...props
}: UserBlockProps) {
   return (
      <div
         className={cn(
            'bg-white p-6 grid grid-cols-1 gap-3 rounded-2xl',
            className
         )}
         {...props}
      >
         {heading}
         <ul className="grid grid-cols-1 gap-3">
            {items.map((item, index) => (
               <li key={index} className="flex items-center gap-2 break-all">
                  {item.icon} {item.text}
               </li>
            ))}
         </ul>
         {footer}
      </div>
   )
}
