'use client'

import { FC, HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'
import MenuButton from '@/entities/MenuButton'
import { usePathname } from 'next/navigation'

export type MenuItem = {
   name: string
   link: string
   icon?: ReactNode
}

export type MenuProps = {
   items: MenuItem[]
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>

const Menu: FC<MenuProps> = ({ items, className, ...props }) => {
   const pathname = usePathname()

   return (
      <nav className={cn('flex items-end', className)} {...props}>
         {items.map((item) => (
            <MenuButton
               key={item.link}
               link={item.link}
               isActive={pathname === item.link}
               className="hover:bg-[rgba(218,230,242,0.6)] hover:text-primary/50 text-sm 768p:text-base"
               activeColor="bg-[rgba(218,230,242,1)]"
            >
               {item.icon}
               {item.name}
            </MenuButton>
         ))}
      </nav>
   )
}

export default Menu
