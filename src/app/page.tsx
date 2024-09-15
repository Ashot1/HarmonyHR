import { redirect } from 'next/navigation'

export default function Home() {
   return redirect('/info/timeoff?Type=Sick&Balance=Balance+History&Date=All')
}
