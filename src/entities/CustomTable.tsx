import {
   Table,
   TableBody,
   TableCaption,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from '@/shared/ui/table'
import { cn } from '@/shared/lib/utils'
import { inter } from '@/shared/lib/fonts'

export type CustomTableProps = {
   caption?: string
   header: { text: string }[]
   content: string[][]
   className?: string
}

export default function CustomTable({
   caption,
   header,
   content,
   className,
}: CustomTableProps) {
   return (
      <Table className={className}>
         {caption && <TableCaption>{caption}</TableCaption>}
         <TableHeader
            className={cn(
               '[&_tr]:border-b-0 bg-[rgba(218,230,242,1)]',
               inter.className
            )}
         >
            <TableRow aria-label="Наименования колонок">
               {header.map((item, index) => (
                  <TableHead
                     key={index + item.text}
                     aria-label={item.text}
                     className="text-black"
                  >
                     {item.text}
                  </TableHead>
               ))}
            </TableRow>
         </TableHeader>
         <TableBody>
            {content.map((row, index) => (
               <TableRow
                  key={index}
                  className="border-b-2 border-[rgba(124,150,177,1)] text-base"
                  tabIndex={0}
               >
                  {row.map((col) => (
                     <TableCell key={`col-${index} ${col}`} aria-label={col}>
                        {col}
                     </TableCell>
                  ))}
               </TableRow>
            ))}
         </TableBody>
      </Table>
   )
}
