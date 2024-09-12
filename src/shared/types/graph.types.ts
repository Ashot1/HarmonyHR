type tokens = {
   access_token: string
   refresh_token: string
}

export type LoginData = {
   login: tokens
}

export type RefreshAccessToken = {
   refreshToken: tokens
}

export type BackendError = {
   message: string
   locations: {
      line: number
      column: number
   }[]
   path: string[]
   extensions: {
      code: string
      originalError: {
         message: string
         statusCode: number
      }
   }
}[]

export type LoginResponse = {
   data: null | LoginData
   errors: undefined | BackendError
}

export type RefreshTokenResponse = {
   data: null | RefreshAccessToken
   errors: undefined | BackendError
}

export type UserResponse = {
   data: null | {
      myProfile: {
         id: string
         name: string
         avatar: string
      }
   }
}
