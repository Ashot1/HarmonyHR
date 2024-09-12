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
import { BackendError } from '@/shared/lib/types'

export function LoginForm() {
   const router = useRouter()
   const [Error, setError] = useState<string | undefined>()

   const Login = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setError(undefined)

      const response = await fetch('/api/login', {
         method: 'POST',
         body: JSON.stringify({
            email: 'john@mail.com',
            password: 'changeme',
         }),
      })

      const data = (await response.json()) as BackendError
      setError(data[0]?.message)

      if (response.status === 200) router.push('/')
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
