'use client'

import { FC, useState } from 'react'
import TripleButton from '@/entities/TripleButton'
import { ToggleProps } from '@radix-ui/react-toggle'

export type TripleHiddenElementProps = ToggleProps

const TripleHiddenElement: FC<TripleHiddenElementProps> = ({
   children,
   ...props
}) => {
   const [IsOpen, setIsOpen] = useState(false)

   return (
      <>
         <TripleButton
            pressed={IsOpen}
            onPressedChange={() => setIsOpen((prev) => !prev)}
            {...props}
         />
         {IsOpen && children}
      </>
   )
}

export default TripleHiddenElement
