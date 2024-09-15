'use client'

import { FC } from 'react'
import SectionHeader from '@/shared/ui/Headings/SectionHeader'
import Image from 'next/image'
import CustomTable, { CustomTableProps } from '@/entities/CustomTable'
import { useUser } from '@/shared/store/User'
import { ScrollArea, ScrollBar } from '@/shared/ui/scroll-area'
import HistoryFilter from '@/features/HistoryFilter'
import { cn } from '@/shared/lib/utils'

// data
const tableHeader: CustomTableProps['header'] = [
   { text: 'Date' },
   { text: 'Description' },
   { text: 'Used Days (-)' },
   { text: 'Earned Days (+)' },
   { text: 'Balance' },
]

const FilterByType = ['Sick', 'Annual Leave', 'Comp/in Lieu Time']
const FilterByBalance = ['Balance History']
const FilterByDate = ['All']

// component
const UserInfoHistory: FC = () => {
   const User = useUser((state) => state.User)

   const tableData = User.userHistory.map((item) => [
      `${item.date}`,
      `${item.description}`,
      `${item.usedDays || ''}`,
      item.earnedDays > 0 ? item.earnedDays.toFixed(2) : '',
      item.balance.toFixed(2),
   ])

   const filterSmallScreenClassName = 'max-w-full w-full 500p:w-auto'

   return (
      <div>
         <SectionHeader
            heading="History"
            icon={
               <Image
                  src="/history.svg"
                  alt="History icon"
                  width={20}
                  height={20}
               />
            }
            className="border-none"
            headingClassName="text-lg"
         />
         <div className="grid grid-cols-1 500p:grid-cols-2 768p:grid-cols-[repeat(2,max-content)_1fr] gap-1.5 768p:gap-3 mb-4">
            <HistoryFilter
               name="Type"
               items={FilterByType}
               wrapperClassName={cn(
                  '500p:col-span-2 768p:col-span-1',
                  filterSmallScreenClassName
               )}
               triggerClassName="w-full"
            />
            <HistoryFilter
               name="Date"
               items={FilterByDate}
               wrapperClassName={filterSmallScreenClassName}
               triggerClassName="w-full"
            />
            <HistoryFilter
               name="Balance"
               items={FilterByBalance}
               CloseButton={false}
               wrapperClassName={cn(
                  'justify-self-end',
                  filterSmallScreenClassName
               )}
               triggerClassName="w-full 500p:w-auto"
            />
         </div>
         <ScrollArea>
            <CustomTable header={tableHeader} content={tableData} />
            <ScrollBar orientation="horizontal" />
         </ScrollArea>
      </div>
   )
}

export default UserInfoHistory
