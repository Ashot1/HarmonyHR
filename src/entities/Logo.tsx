import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import { cn } from '@/shared/lib/utils'
import { inter } from '@/shared/lib/fonts'

export type LogoProps = Omit<
   DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
   'children' | 'ref'
>

const Logo: FC<LogoProps> = ({ className, ...props }) => {
   return (
      <h1
         className={cn(
            'text-base 500p:text-lg 768p:text-xl font-bold font-sans',
            inter.className,
            className
         )}
         {...props}
      >
         HarmonyHR
      </h1>
   )
}

export default Logo
