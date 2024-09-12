'use client'

import { FC } from 'react'
import { TextAlignJustifyIcon } from '@radix-ui/react-icons'
import { Toggle } from '@/shared/ui/toggle'
import { ToggleProps } from '@radix-ui/react-toggle'

export type TripleMenuProps = ToggleProps

const TripleButton: FC<TripleMenuProps> = (props) => {
   return (
      <Toggle {...props}>
         <TextAlignJustifyIcon className="size-5" />
      </Toggle>
   )
}

export default TripleButton
