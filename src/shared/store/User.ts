import { UserType } from '@/shared/types/userState.types'
import { create } from 'zustand'

export type UserState = {
   User: UserType
   updateUser: (user: Partial<UserType>) => void
}

export type UserHistory = {
   date: string
   description: string
   usedDays: number
   earnedDays: number
   balance: number
}[]

// изначальное состояние неизменяемых данных о пользователе
const History: UserHistory = [
   {
      date: '23/05/2024',
      description: 'Accrual for 23/05/2024 to 20/11/2024',
      usedDays: 0,
      earnedDays: 3.0,
      balance: 3.0,
   },
   {
      date: '23/05/2024',
      description: 'Accrual for 23/05/2024 to 20/11/2024',
      usedDays: -6,
      earnedDays: 0,
      balance: 3.0,
   },
   {
      date: '23/05/2024',
      description: 'Accrual for 23/05/2024 to 20/11/2024',
      usedDays: 0,
      earnedDays: 3.0,
      balance: 3.0,
   },
   {
      date: '23/05/2024',
      description: 'Accrual for 23/05/2024 to 20/11/2024',
      usedDays: -6,
      earnedDays: 0,
      balance: 3.0,
   },
   {
      date: '23/05/2024',
      description: 'Accrual for 23/05/2024 to 20/11/2024',
      usedDays: 0,
      earnedDays: 3.0,
      balance: 3.0,
   },
]

const initialState: UserType = {
   avatar: '',
   name: '',
   email: 'avd.yana@videorollnet',
   phone: '07911 654321',
   accrualLevelStart: '03/09-2020',
   sick: 3,
   annualLeave: 10.3,
   lieuTime: 0,
   hireDate: '09.03.2020',
   jobInfo: {
      id: 5,
      employmentType: 'Full-Time',
      department: 'Operations',
      locationRegion: 'Europe',
      locationCity: 'London, UK',
   },
   directReports: [
      { name: 'Shane' },
      { name: 'Nathan' },
      { name: 'Mitchell' },
      { name: 'Phillip' },
      { name: 'Alex' },
      { name: 'Jack' },
      { name: 'John' },
      { name: 'Michael' },
   ],
   upcomingTimeOff: [
      { date: '06.27.2020', type: 'Health', description: '1 dey of Sick' },
      { date: '07.04.2020', type: 'Holiday', description: 'Independence Day' },
   ],
   userHistory: History,
}

// сам store
export const useUser = create<UserState>((set) => ({
   User: initialState,
   updateUser: (data) =>
      set((prev) => ({
         User: {
            ...prev.User,
            ...data,
         },
      })),
}))
