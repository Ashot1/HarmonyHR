import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'

export type SectionHeaderProps = {
   heading: string
   headingClassName?: string
   icon?: ReactNode
   rightContent?: ReactNode
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>

export default function SectionHeader({
   heading,
   icon,
   rightContent,
   className,
   headingClassName,
   ...props
}: SectionHeaderProps) {
   return (
      <div
         className={cn(
            'flex justify-between border-b-2 border-[rgba(124,150,177,1)] pb-3 items-center flex-wrap',
            className
         )}
         {...props}
      >
         <h3
            className={cn(
               'text-[rgba(32,73,115,1)] flex gap-4 text-xl items-center',
               headingClassName
            )}
         >
            {icon}
            {heading}
         </h3>
         {rightContent}
      </div>
   )
}
