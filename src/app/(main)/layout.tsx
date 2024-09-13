import { ReactNode } from 'react'
import UserProvider from '@/shared/hoc/UserProvider'
import { getUser } from '@/shared/actions/user'
import Header from '@/widgets/Header'

export default async function MainPagesLayout({
   children,
}: {
   children: ReactNode
}) {
   const response = await getUser()
   const profile = response.data?.myProfile

   const jobInfo = profile?.id ? { id: profile.id } : {}

   return (
      <UserProvider
         UserData={{
            name: profile?.name,
            avatar: profile?.avatar,
            ...jobInfo,
         }}
      >
         <Header />
         {children}
      </UserProvider>
   )
}
