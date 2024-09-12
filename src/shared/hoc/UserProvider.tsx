'use client'

import { FC, ReactNode, useEffect } from 'react'
import { UserType } from '@/shared/types/userState.types'
import { useUser } from '@/shared/store/User'

const UserProvider: FC<{
   children: ReactNode
   UserData: Partial<UserType>
}> = ({ UserData, children }) => {
   const setUserInitialState = useUser((state) => state.updateUser)

   useEffect(() => {
      setUserInitialState(UserData)
   }, [UserData])

   return children
}

export default UserProvider
