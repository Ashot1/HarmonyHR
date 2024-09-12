'use client'

import { FC, HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'

export type UserActionItem = {
   action: () => void
   icon: ReactNode
   label?: string
}

export type UserActionProps = Omit<
   HTMLAttributes<HTMLDivElement>,
   'children'
> & {
   items: UserActionItem[]
}

const UserActions: FC<UserActionProps> = ({ items, className, ...props }) => {
   return (
      <div
         className={cn('flex items-center gap-4 justify-end', className)}
         {...props}
      >
         {items.map((item, index) => (
            <button
               key={`${index}ActionButton`}
               className="h-full grid place-items-start hover:opacity-50 duration-300"
               onClick={item.action}
            >
               {item.icon}
            </button>
         ))}
      </div>
   )
}

export default UserActions
