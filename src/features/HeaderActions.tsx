'use client'

import { FC, HTMLAttributes, useState } from 'react'
import {
   ExitIcon,
   GearIcon,
   QuestionMarkCircledIcon,
} from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import { useUser } from '@/shared/store/User'
import Image from 'next/image'
import UserActions, { UserActionItem } from '@/entities/UserActions'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu'

export type HeaderActionProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'>

const HeaderActions: FC<HeaderActionProps> = (props) => {
   const router = useRouter()
   const { avatar } = useUser((state) => state.User)
   const [MobileDropDownState, setMobileDropDownState] = useState(false)

   const logOut = async () => {
      const response = await fetch('/api/logout')
      if (response.status === 200) router.push('/login')
   }

   const AvatarImage = (
      <Image
         src={avatar || '/User.svg'}
         alt="avatar"
         width={40}
         height={40}
         className="rounded-full min-w-10 min-h-10"
      />
   )

   const HeaderItems: UserActionItem[] = [
      {
         icon: <GearIcon className="size-5 mt-1.5" />,
         action: () => console.log('Settings'),
         label: 'Settings',
      },
      {
         icon: <QuestionMarkCircledIcon className="size-5 mt-1.5" />,
         action: () => console.log('FAQ'),
         label: 'About',
      },
      {
         icon: <ExitIcon className="size-5 mt-1.5" />,
         action: logOut,
         label: 'Logout',
      },
      {
         icon: AvatarImage,
         action: () => console.log('user menu'),
      },
   ]

   // если мобильный экран, то выводим dropdown и скрываем UserActions
   return (
      <>
         <DropdownMenu
            open={MobileDropDownState}
            onOpenChange={setMobileDropDownState}
         >
            <DropdownMenuTrigger
               aria-label="Выпадающее меню"
               className="500p:hidden flex items-start"
            >
               {AvatarImage}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
               {HeaderItems.toSpliced(-1, 1).map((item) => (
                  <DropdownMenuItem
                     key={item.label}
                     className="flex items-center gap-4"
                     onSelect={item.action}
                  >
                     {item.icon}
                     {item.label}
                  </DropdownMenuItem>
               ))}
            </DropdownMenuContent>
         </DropdownMenu>

         <UserActions
            items={HeaderItems}
            className="hidden 500p:flex"
            {...props}
         />
      </>
   )
}

export default HeaderActions
