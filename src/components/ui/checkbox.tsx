import { Checkbox as CheckboxPrimitive } from 'radix-ui'
import * as React from 'react'

import { cn } from '@lib/utils'

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'peer border-input  hover:bg-row-active/20 cursor-pointer data-[state=checked]:bg-row-active data-[state=checked]:text-row-active    data-[state=checked]:border-row-active   aria-invalid:ring-destructive/20    size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:border-1px disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator data-slot="checkbox-indicator" className="grid place-content-center text-current transition-none">
        {/* <CheckIcon className="size-3.5" /> */}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
