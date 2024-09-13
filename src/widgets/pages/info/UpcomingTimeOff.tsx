'use client'

import { FC, ReactNode } from 'react'
import SectionHeader from '@/shared/ui/Headings/SectionHeader'
import { Clock4Icon, CrossIcon } from 'lucide-react'
import { useUser } from '@/shared/store/User'
import { UpcomingTimeOffTypes } from '@/shared/types/userState.types'
import Image from 'next/image'
import { formatDate } from '@/shared/lib/utils'
import { inter } from '@/shared/lib/fonts'

const icons: Record<UpcomingTimeOffTypes, ReactNode> = {
   Health: <CrossIcon className="size-[30px] text-[rgba(28,49,68,1)]" />,
   Holiday: <Image src="/pig.svg" alt="Holiday icon" width={30} height={30} />,
}

const UpcomingTimeOff: FC = () => {
   const User = useUser((state) => state.User)

   return (
      <div>
         <SectionHeader
            heading="Upcoming Time Off"
            headingClassName="text-lg"
            icon={<Clock4Icon className="size-5 text-[rgba(28,49,68,1)] " />}
         />
         <ul className="grid w-full py-2">
            {User.upcomingTimeOff.map((item, index) => {
               const title = formatDate({
                  IncomingDate: item.date,
                  needTime: false,
                  options: { dateStyle: 'medium' },
               }).split(',')[0]

               return (
                  <ListItem
                     key={index}
                     icon={icons[item.type]}
                     title={title}
                     description={item.description}
                  />
               )
            })}
         </ul>
      </div>
   )
}

export default UpcomingTimeOff

const ListItem: FC<{ icon: ReactNode; title: string; description: string }> = ({
   icon,
   title,
   description,
}) => {
   return (
      <li className="border-b-2 border-[rgba(124,150,177,1)] py-4 flex gap-4 items-center text-sm 768p:text-base">
         {icon}
         <span className={inter.className}>
            <p>{title}</p>
            <p>{description}</p>
         </span>
      </li>
   )
}
