import TimeOff from '@/widgets/pages/info/TimeOff'
import UpcomingTimeOff from '@/widgets/pages/info/UpcomingTimeOff'
import UserInfoHistory from '@/widgets/pages/info/UserInfoHistory'

export default function TimeOffPage() {
   return (
      <div className="flex-1 bg-white rounded-b-2xl py-10 px-4 flex flex-col gap-4">
         <TimeOff />
         <UpcomingTimeOff />
         <UserInfoHistory />
      </div>
   )
}
