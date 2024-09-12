'use server'

import { UserResponse } from '@/shared/types/graph.types'
import { cookies } from 'next/headers'
import { TOKENS } from '@/shared/lib/config'
import { graphRequest } from '@/shared/lib/utils'
import { redirect } from 'next/navigation'

export async function getUser() {
   const cookieStore = cookies()

   const accessToken = cookieStore.get(TOKENS.access)?.value

   if (!accessToken) return redirect('/login')

   const options = {
      headers: {
         Authorization: `Bearer ${accessToken}`,
      },
   }

   const response = await graphRequest(
      `
      query {
        myProfile {
          id
          name
          avatar
        }
      }
   `,
      options
   )

   return response as UserResponse
}
