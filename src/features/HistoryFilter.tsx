'use client'

import { FC } from 'react'
import CustomSelect, { CustomSelectProps } from '@/entities/CustomSelect'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export type historyFilterProps = {
   name: string
} & Omit<CustomSelectProps, 'setValue' | 'Value' | 'id'>

const HistoryFilter: FC<historyFilterProps> = ({ name, items, ...props }) => {
   const router = useRouter()
   const path = usePathname()
   const sParams = useSearchParams()

   const changesFilter = (value: string) => {
      const newSParams = new URLSearchParams(sParams)
      newSParams.set(name, value)
      router.replace(path + `?${newSParams}#id-${name}`)
   }

   const currentValue = sParams.get(name)

   return (
      <CustomSelect
         id={`id-${name}`}
         Value={currentValue ?? ''}
         setValue={(val) => changesFilter(val)}
         items={items}
         {...props}
      />
   )
}

export default HistoryFilter
