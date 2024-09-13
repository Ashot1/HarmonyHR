import { graphRequest } from '@/shared/lib/utils'
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { BackendError, LoginResponse } from '@/shared/types/graph.types'
import { TokenParameters, TOKENS } from '@/shared/lib/config'

// ошибка, которая всплывает если пришли пустые поля, чтобы не делать лишних запросов к бд
const WithoutDataError: BackendError = [
   {
      message: 'Email or password is missing',
      path: ['login'],
      extensions: {
         code: 'UNAUTHENTICATED',
         originalError: {
            message: 'Unauthorized',
            statusCode: 400,
         },
      },
      locations: [{ line: 1, column: 1 }],
   },
]

export async function POST(request: NextRequest) {
   //получаем данные из запроса
   const { email, password } = await request.json()

   if (!email || !password)
      return NextResponse.json(WithoutDataError, {
         status: WithoutDataError[0].extensions.originalError.statusCode,
      })

   // создаем запрос на логин
   const response = await graphRequest<LoginResponse>(`
      mutation {
         login(email: "${email}", password: "${password}") {
            access_token
            refresh_token
         }
      }
   `)
   // добавляем токены в куки
   if (response.data) {
      const cookieStore = cookies()

      const tokens = response.data.login

      cookieStore.set(TOKENS.access, tokens.access_token, TokenParameters)
      cookieStore.set(TOKENS.refresh, tokens.refresh_token, TokenParameters)
   }

   // возвращаем ошибку, если она есть
   const status = response?.errors?.[0].extensions.originalError.statusCode

   return NextResponse.json(response?.errors || {}, {
      status,
   })
}
