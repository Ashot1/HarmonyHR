import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { graphURL } from '@/shared/lib/config'

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs))
}

export async function graphRequest<T>(query: string) {
   const res = await fetch(graphURL, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
   })

   return (await res.json()) as T
}
