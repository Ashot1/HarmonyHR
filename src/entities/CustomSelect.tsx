'use client'

import { FC } from 'react'
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/shared/ui/select'
import { Cross1Icon } from '@radix-ui/react-icons'
import { Button } from '@/shared/ui/button'
import { cn } from '@/shared/lib/utils'
import { ClassValue } from 'clsx'

export type CustomSelectProps = {
   Value: string
   setValue: (value: string) => void
   items: string[]
   id?: string
   triggerClassName?: ClassValue
   wrapperClassName?: ClassValue
   CloseButton?: boolean
}

const CustomSelect: FC<CustomSelectProps> = ({
   Value,
   setValue,
   items,
   triggerClassName,
   wrapperClassName,
   CloseButton = true,
   id,
}) => {
   return (
      <Select value={Value} onValueChange={(val) => setValue(val)}>
         <div className={cn('relative max-w-max', wrapperClassName)} id={id}>
            <SelectTrigger
               className={cn(
                  'size-fit h-9 border-[rgba(124,150,177,1)] border overflow-hidden relative justify-between min-w-28 pr-16',
                  triggerClassName
               )}
               iconClassName="bg-[rgba(218,230,242,1)] h-full absolute top-0 right-0 w-6 px-1 opacity-100"
            >
               <SelectValue placeholder="Select something" />
            </SelectTrigger>
            {CloseButton && (
               <Button
                  variant="link"
                  className="absolute right-5 top-0"
                  onClick={() => setValue('')}
               >
                  <Cross1Icon className="opacity-50 size-3.5" />
               </Button>
            )}
         </div>
         <SelectContent>
            {items.map((item) => (
               <SelectItem value={item} key={item}>
                  {item}
               </SelectItem>
            ))}
         </SelectContent>
      </Select>
   )
}

export default CustomSelect
