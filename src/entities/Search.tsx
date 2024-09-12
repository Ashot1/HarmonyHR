import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { HTMLAttributes } from 'react'
import { cn } from '@/shared/lib/utils'

export type SearchProps = Omit<HTMLAttributes<HTMLLabelElement>, 'children'>

export default function Search({ className, ...props }: SearchProps) {
   return (
      <label
         className={cn(
            'border border-black rounded-xl flex items-center gap-1 h-8 overflow-hidden px-2',
            className
         )}
         {...props}
      >
         <MagnifyingGlassIcon className="min-h-5 min-w-5" />
         <input
            type="search"
            className="flex-1 text-sm outline-none p-0 min-w-0"
            placeholder="Search"
         />
      </label>
   )
}
