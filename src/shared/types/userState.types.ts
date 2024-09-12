export type JobInfo = {
   id: number | string
   employmentType: string
   department: string
   locationRegion: string
   locationCity: string
}

export type DirectReports = {
   name: string
}

export type UpcomingTimeOffTypes = 'Health' | 'Holiday'

export type UpcomingTimeOff = {
   type: UpcomingTimeOffTypes
   date: string
   description: string
}

export type UserHistory = {
   date: string
   description: string
   usedDays: number
   earnedDays: number
   balance: number
}

export type UserType = {
   name: string
   avatar: string
   phone: string
   email: string
   sick: number
   accrualLevelStart: string
   hireDate: string
   annualLeave: number
   lieuTime: number
   jobInfo: JobInfo
   directReports: DirectReports[]
   upcomingTimeOff: UpcomingTimeOff[]
   userHistory: UserHistory[]
}
