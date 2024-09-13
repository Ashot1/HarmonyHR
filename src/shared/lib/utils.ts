import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { graphURL } from '@/shared/lib/config'

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs))
}

export async function graphRequest<T>(
   query: string,
   options?: { headers?: { [key: string]: string } }
) {
   const res = await fetch(graphURL, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         ...options?.headers,
      },
      body: JSON.stringify({ query }),
   })

   return (await res.json()) as T
}

type ConvertDateProps = {
   IncomingDate: string | Date
   options?: Intl.DateTimeFormatOptions
   needTime?: boolean
}
export const formatDate = ({
   IncomingDate,
   options,
   needTime,
}: ConvertDateProps) => {
   const date = new Date(IncomingDate)
   if (!needTime) return date.toLocaleDateString('en-US', options)
   return date.toLocaleString('en-US', options)
}
