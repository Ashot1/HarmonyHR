'use client'

import { FC, HTMLAttributes } from 'react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

export type HeaderMenuButtonProps = {
   link: string
   isActive?: boolean
   activeColor?: string
} & HTMLAttributes<HTMLAnchorElement>

const MenuButton: FC<HeaderMenuButtonProps> = ({
   link,
   children,
   className,
   isActive = false,
   activeColor = 'bg-primary',
   ...props
}) => {
   return (
      <Link
         href={link}
         className={cn(
            'rounded-t-lg h-full hover:bg-primary hover:text-white duration-200 1024p:px-4 py-3 px-2',
            isActive && activeColor,
            className
         )}
         {...props}
      >
         {children}
      </Link>
   )
}

export default MenuButton
