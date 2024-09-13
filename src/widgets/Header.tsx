import Logo from '@/entities/Logo'
import Menu, { MenuItem } from '@/features/Menu'
import Search from '@/entities/Search'
import HeaderActions from '@/features/HeaderActions'
import TripleHiddenElement from '@/features/TripleHiddenElement'

export default function Header() {
   const HeaderMenuItems: MenuItem[] = [
      { link: '/home', name: 'Home' },
      { link: '/info', name: 'My Info' },
      { link: '/people', name: 'People' },
      { link: '/hiring', name: 'Hiring' },
      { link: '/reports', name: 'Reports' },
      { link: '/files', name: 'Files' },
   ]

   return (
      <div className="bg-white w-dvw pt-8 h-20 flex px-3 768p:px-6 gap-3 1080p:gap-20 relative justify-between overflow-x-clip">
         <Logo className="flex justify-center leading-6" />
         <Menu
            items={HeaderMenuItems}
            className="flex-1 justify-center 768p:flex hidden"
         />
         <div className="w-1/2 768p:w-10 1024p:w-1/5 1080p:gap-5 min-w-10">
            <Search
               className={`focus-within:absolute 500p:focus-within:static 768p:focus-within:absolute 1024p:focus-within:static 
                  focus-within:bg-white focus-within:shadow-xl focus-within:left-[5%] duration-300 
                  focus-within:w-11/12 500p:focus-within:w-auto 768p:focus-within:w-11/12 1024p:focus-within:w-auto`}
            />
         </div>
         <TripleHiddenElement className="768p:hidden">
            <Menu
               items={HeaderMenuItems}
               className="768p:hidden absolute flex justify-center animate-slide-in top-[110%] right-1 px-4 py-2 flex-col bg-white rounded-xl z-10"
            />
         </TripleHiddenElement>
         <HeaderActions />
      </div>
   )
}
