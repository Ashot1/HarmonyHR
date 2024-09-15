export const MAX_LOGIN_COOKIE_AGE = 60 * 60 * 24 * 30

export const TOKENS = {
   access: 'access_token',
   refresh: 'refresh_token',
}

export const TokenParameters = {
   maxAge: MAX_LOGIN_COOKIE_AGE,
   httpOnly: true,
   secure: true,
   path: '/',
}
