'use client'

import { FC, Fragment } from 'react'
import SectionHeader from '@/shared/ui/Headings/SectionHeader'
import Image from 'next/image'
import { useUser } from '@/shared/store/User'
import TimeOffBlock, { TimeOffBlockProps } from '@/entities/TimeOffBlock'
import { CrossIcon } from 'lucide-react'
import { UserType } from '@/shared/types/userState.types'
import { ScrollArea, ScrollBar } from '@/shared/ui/scroll-area'

type DataType = (Pick<TimeOffBlockProps, 'main' | 'footer' | 'description'> & {
   signature: string
   heading: string
})[]

// информация по блокам
const data = (User: UserType): DataType => [
   {
      main: (
         <>
            <CrossIcon className="size-9" /> {User.sick}
         </>
      ),
      heading: 'Sick',
      description: 'Days Available',
      footer: '1 dey scheduled',
      signature: 'Sick Full-Time',
   },
   {
      main: (
         <>
            <Image
               src="/mountain.svg"
               alt="Annual Leave icon"
               width={36}
               height={36}
            />
            {User.annualLeave}
         </>
      ),
      heading: 'Annual Leave',
      description: 'Days Available',
      signature: 'Holiday Full-Time',
   },
   {
      main: (
         <>
            <Image
               src="/timeoff.svg"
               alt="Annual Leave icon"
               width={36}
               height={36}
            />
            {User.lieuTime}
         </>
      ),
      heading: 'Comp/in Lieu Time',
      description: 'Human User(YTD)',
      signature: 'Comp/in Lieu Time Flexible Policy',
   },
]

// компонент блока с информацией
const TimeOff: FC = () => {
   const User = useUser((state) => state.User)

   const rightContent = (
      <div className="flex gap-6 items-center text-sm 768p:text-base">
         <p>
            Accrual Level Start Date{' '}
            <span className="text-[rgba(55,88,171,1)]">
               {User.accrualLevelStart}
            </span>
         </p>
         <button className="px-2 py-1 border border-black rounded-lg hover:bg-[black] hover:text-white duration-300">
            Add Time Off Policy
         </button>
      </div>
   )

   return (
      <div>
         <SectionHeader
            heading="Time Off"
            icon={
               <Image
                  alt="time off"
                  src="/timeoff.svg"
                  width={20}
                  height={20}
               />
            }
            rightContent={rightContent}
         />
         <ScrollArea className="1024p:px-[7%]">
            <div className="grid grid-rows-[1fr_0.2fr] gap-x-4 768p:gap-x-14 gap-y-2 pt-7 grid-flow-col">
               {data(User).map((item) => (
                  <Fragment key={item.heading}>
                     <TimeOffBlock className="min-w-[250px]" {...item} />
                     <p className="justify-self-center text-[rgba(124,150,177,1)]">
                        {item.signature}
                     </p>
                  </Fragment>
               ))}
            </div>
            <ScrollBar orientation="horizontal" />
         </ScrollArea>
      </div>
   )
}

export default TimeOff
