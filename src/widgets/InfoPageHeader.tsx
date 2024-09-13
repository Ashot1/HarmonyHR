'use client'

import { FC } from 'react'
import PageHeader from '@/shared/ui/Headings/PageHeader'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
import { useUser } from '@/shared/store/User'
import Menu, { MenuItem } from '@/features/Menu'
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/shared/ui/select'
import { DotsVerticalIcon } from '@radix-ui/react-icons'

const InfoPageHeaderMenuItems: MenuItem[] = [
   { link: '/info/personal', name: 'Personal' },
   { link: '/info/job', name: 'Job' },
   { link: '/info/timeoff', name: 'Time Off' },
   { link: '/info/emergency', name: 'Emergency' },
   { link: '/info/documents', name: 'Documents' },
   { link: '/info/notes', name: 'Notes' },
   { link: '/info/benefits', name: 'Benefits' },
   { link: '/info/training', name: 'Training' },
   { link: '/info/assets', name: 'Assets' },
]

const InfoPageHeader: FC = () => {
   const User = useUser((state) => state.User)
   return (
      <PageHeader className="pt-10 flex gap-2 768p:gap-16">
         <Avatar className="size-20 500p:size-40 z-10">
            <AvatarImage src={User.avatar} alt={`avatar of ${User.name}`} />
            <AvatarFallback>A</AvatarFallback>
         </Avatar>
         <div className="grid flex-1 grid-cols-2 overflow-x-hidden content-between 500p:mt-9 gap-10">
            <h2 className="ml-7 font-bold text-lg 768p:text-2xl text-balance">
               {User.name}
            </h2>
            <div className="hidden 768p:flex gap-4 justify-end">
               <Select>
                  <SelectTrigger className="w-[180px] border-primary/20 border-2">
                     <SelectValue placeholder="Request a Change" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectItem value="light">Change 1</SelectItem>
                  </SelectContent>
               </Select>
               <Select>
                  <SelectTrigger className="size-fit h-9 border-primary/20 border-2">
                     <SelectValue placeholder="⚙" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectItem value="light">⚙</SelectItem>
                  </SelectContent>
               </Select>
            </div>
            <DotsVerticalIcon className="size-5 justify-self-end 768p:hidden" />
            <Menu
               items={InfoPageHeaderMenuItems}
               activeColor="bg-white"
               className="overflow-x-scroll col-span-2 disableScroll"
               ButtonClassName="hover:bg-white/70 hover:text-primary/50 min-w-24 text-center"
            />
         </div>
      </PageHeader>
   )
}

export default InfoPageHeader
