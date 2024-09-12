import { NextRequest, NextResponse } from 'next/server'
import { TokenParameters, TOKENS } from '@/shared/lib/config'
import { graphRequest } from '@/shared/lib/utils'
import { RefreshTokenResponse } from '@/shared/lib/types'

export default async function middleware(request: NextRequest) {
   const pathname = request.nextUrl.pathname

   const deleteTokensCookie = (response: NextResponse) => {
      response.cookies.delete(TOKENS.access)
      response.cookies.delete(TOKENS.refresh)
   }
   const loginRedirect = NextResponse.redirect(
      request.nextUrl.origin + '/login'
   )

   // если страница логина или api endpoint, то в любом случае пропускаем пользователя
   if (pathname.startsWith('/login') || pathname.startsWith('/api'))
      return NextResponse.next()

   const accessToken = request.cookies.get(TOKENS.access)
   const refreshToken = request.cookies.get(TOKENS.refresh)

   // если нет refresh токена, то перенаправляем на логин и очищаем все токены
   if (!refreshToken) {
      deleteTokensCookie(loginRedirect)
      return loginRedirect
   }

   // если все токены есть, то пропускаем пользователя
   if (accessToken) return NextResponse.next()

   // при отсутствии access токена получаем его или отправляем на логин
   const newTokens = await graphRequest<RefreshTokenResponse>(`
         mutation {
           refreshToken(
             refreshToken: "${refreshToken.value}"
           ) {
             access_token
             refresh_token
           }
         }
      `)

   const newAccessToken = newTokens.data?.refreshToken?.access_token
   const newRefreshToken = newTokens.data?.refreshToken?.refresh_token

   if (!newAccessToken || !newRefreshToken) {
      deleteTokensCookie(loginRedirect)
      return loginRedirect
   }

   const newResponse = NextResponse.next()

   newResponse.cookies.set(TOKENS.access, newAccessToken, TokenParameters)
   newResponse.cookies.set(TOKENS.refresh, newRefreshToken, TokenParameters)

   return newResponse
}

export const config = {
   matcher: [
      '/((?!_next/static|_next/image|__nextjs_original-stack-frame|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|json)$).*)',
   ],
}
