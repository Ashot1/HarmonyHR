'use client'

import { FC } from 'react'
import SectionHeader from '@/shared/ui/Headings/SectionHeader'
import Image from 'next/image'
import CustomTable, { CustomTableProps } from '@/entities/CustomTable'
import { useUser } from '@/shared/store/User'
import { ScrollArea, ScrollBar } from '@/shared/ui/scroll-area'

const tableHeader: CustomTableProps['header'] = [
   { text: 'Date' },
   { text: 'Description' },
   { text: 'Used Days (-)' },
   { text: 'Earned Days (+)' },
   { text: 'Balance' },
]

const UserInfoHistory: FC = () => {
   const User = useUser((state) => state.User)

   const tableData = User.userHistory.map((item) => [
      `${item.date}`,
      `${item.description}`,
      `${item.usedDays || ''}`,
      item.earnedDays > 0 ? item.earnedDays.toFixed(2) : '',
      item.balance.toFixed(2),
   ])

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
         <ScrollArea>
            <CustomTable header={tableHeader} content={tableData} />
            <ScrollBar orientation="horizontal" />
         </ScrollArea>
      </div>
   )
}

export default UserInfoHistory
