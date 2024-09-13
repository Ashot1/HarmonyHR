'use client'

import { Button } from '@/shared/ui/button'
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export function LoginForm() {
   const router = useRouter()
   const [Error, setError] = useState<string | undefined>()

   const Login = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      setError(undefined)

      //получаем все поля из формы
      const fields = (e.target as HTMLFormElement).querySelectorAll('input')
      const fieldsInfo: { [key: string]: string } = {}

      // записываем их в формате id: value
      for (let i = 0; i < fields.length; i++) {
         const item = fields.item(i)
         fieldsInfo[item.id] = item.value
      }

      // отправляем запрос на сервер
      const response = await fetch('/api/login', {
         method: 'POST',
         body: JSON.stringify(fieldsInfo),
      })

      // выводим ошибку при наличии
      const data = await response.json()
      setError(data[0]?.message)

      if (response.status === 200) router.push('/info/timeoff')
   }

   return (
      <Card className="mx-auto max-w-sm">
         <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
               Enter your email below to login to your account
            </CardDescription>
         </CardHeader>
         <CardContent>
            <form className="grid gap-4" onSubmit={Login}>
               <fieldset className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                     id="email"
                     type="email"
                     placeholder="m@example.com"
                     autoComplete="email"
                     required
                  />
               </fieldset>
               <fieldset className="grid gap-2">
                  <div className="flex items-center">
                     <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                     id="password"
                     type="password"
                     required
                     autoComplete="current-password"
                  />
               </fieldset>
               <p className="text-red-500">{Error}</p>
               <Button type="submit" className="w-full">
                  Login
               </Button>
            </form>
         </CardContent>
      </Card>
   )
}
