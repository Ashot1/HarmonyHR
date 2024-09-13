'use client'

import { FC, HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'
import MenuButton, { MenuButtonProps } from '@/entities/MenuButton'
import { usePathname } from 'next/navigation'

export type MenuItem = {
   name: string
   link: string
   icon?: ReactNode
}

export type MenuProps = {
   items: MenuItem[]
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'> &
   Partial<Pick<MenuButtonProps, 'activeColor'> & { ButtonClassName: string }>

const Menu: FC<MenuProps> = ({
   items,
   className,
   activeColor,
   ButtonClassName,
   ...props
}) => {
   const pathname = usePathname()

   return (
      <nav className={cn('flex items-end', className)} {...props}>
         {items.map((item) => (
            <MenuButton
               key={item.link}
               link={item.link}
               isActive={pathname.startsWith(item.link)}
               className={cn(
                  'hover:bg-[rgba(218,230,242,0.6)] hover:text-primary/50 text-sm 768p:text-base',
                  ButtonClassName
               )}
               activeColor={cn('bg-[rgba(218,230,242,1)]', activeColor)}
            >
               {item.icon}
               {item.name}
            </MenuButton>
         ))}
      </nav>
   )
}

export default Menu
