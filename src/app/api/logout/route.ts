import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { TOKENS } from '@/shared/lib/config'

export async function GET() {
   try {
      const cookieStore = cookies()
      cookieStore.delete(TOKENS.access)
      cookieStore.delete(TOKENS.refresh)

      return NextResponse.json({ message: 'Successfully logged out' })
   } catch (error) {
      return NextResponse.json(
         { message: `Error logging out ${(error as Error).message}` },
         { status: 500 }
      )
   }
}
