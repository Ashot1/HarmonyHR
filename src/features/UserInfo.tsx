'use client'

import { FC, HTMLAttributes } from 'react'
import { useUser } from '@/shared/store/User'
import UserBlock, { UserBlockItemProps } from '@/entities/UserBlock'
import { UserType } from '@/shared/types/userState.types'
import {
   CircleUserIcon,
   Clock1Icon,
   FacebookIcon,
   GlobeIcon,
   HashIcon,
   LinkedinIcon,
   MailIcon,
   MapPinIcon,
   PhoneIcon,
   TwitterIcon,
   UsersIcon,
} from 'lucide-react'
import { cn, formatDate } from '@/shared/lib/utils'
import { inter } from '@/shared/lib/fonts'
import { ScrollArea, ScrollBar } from '@/shared/ui/scroll-area'

const UserInfo: FC<
   HTMLAttributes<HTMLDivElement> & { wrapperClassName?: string }
> = ({ className, wrapperClassName, ...props }) => {
   const User = useUser((state) => state.User)

   return (
      <ScrollArea className={wrapperClassName}>
         <div
            className={cn(
               'grid grid-cols-1 gap-4 text-sm 768p:text-base',
               inter.className,
               className
            )}
            {...props}
         >
            <MainInfo email={User.email} phone={User.phone} />
            <HireDate hireDate={User.hireDate} />
            <JobInfo jobInfo={User.jobInfo} />
            <DirectReports directReports={User.directReports} />
            <ScrollBar orientation="horizontal" />
         </div>
      </ScrollArea>
   )
}

export default UserInfo

// Далее идут блоки с информацией о пользователе

function MainInfo({ phone, email }: Pick<UserType, 'phone' | 'email'>) {
   const Items: UserBlockItemProps[] = [
      {
         text: phone,
         icon: <PhoneIcon className="size-5 min-w-5" />,
      },
      { text: email, icon: <MailIcon className="size-5 min-w-5" /> },
   ]

   const footer = (
      <div className="w-full flex gap-4">
         <LinkedinIcon className="size-5" />
         <FacebookIcon className="size-5" />
         <TwitterIcon className="size-5" />
      </div>
   )

   return <UserBlock items={Items} footer={footer} />
}

// TODO: сделать реальный расчет даты
function HireDate({ hireDate }: Pick<UserType, 'hireDate'>) {
   const Items: UserBlockItemProps[] = [
      {
         text: formatDate({
            IncomingDate: hireDate,
            needTime: false,
            options: { dateStyle: 'medium' },
         }),
      },
      { text: '3y - 9m - 20d' },
   ]

   return <UserBlock items={Items} heading={<h3>Hire Date</h3>} />
}

function JobInfo({ jobInfo }: Pick<UserType, 'jobInfo'>) {
   const Items: UserBlockItemProps[] = [
      {
         text: `${jobInfo.id}`,
         icon: <HashIcon className="size-5" />,
      },
      {
         text: jobInfo.employmentType,
         icon: <Clock1Icon className="size-5" />,
      },
      { text: jobInfo.department, icon: <UsersIcon className="size-5" /> },
      { text: jobInfo.locationRegion, icon: <GlobeIcon className="size-5" /> },
      { text: jobInfo.locationCity, icon: <MapPinIcon className="size-5" /> },
   ]

   return <UserBlock items={Items} />
}

function DirectReports({ directReports }: Pick<UserType, 'directReports'>) {
   const Items: UserBlockItemProps[] = directReports
      .slice(0, 4)
      .map((user) => ({
         text: user.name,
         icon: <CircleUserIcon className="size-5" />,
      }))
      .concat({
         text: `${directReports.length - 4} More...`,
         icon: <UsersIcon className="size-5" />,
      })

   return <UserBlock items={Items} heading={<h3>Direct Reports</h3>} />
}
