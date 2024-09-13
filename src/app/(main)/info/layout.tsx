import InfoPageHeader from '@/widgets/InfoPageHeader'
import UserInfo from '@/features/UserInfo'

export default function InfoLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <>
         <InfoPageHeader />
         <div className="1024p:flex-row flex-col flex w-dvw px-[5%] gap-4">
            <UserInfo
               wrapperClassName="mt-4 1024p:mt-0 1024p:-translate-y-4"
               className="grid-cols-[repeat(4,max-content)] 1024p:grid-cols-1"
            />
            {children}
         </div>
      </>
   )
}
