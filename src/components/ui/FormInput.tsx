import type { FC } from 'react'
import { Field, FieldDescription, FieldLabel } from './field'
import { Input } from './input'

type TProps = {
  title: string
  description?: string
  placeholder: string
  type?: string
  error?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const FormInput: FC<TProps> = (props) => {
  const { title, description, placeholder, error, type = 'text', ...inputProps } = props

  return (
    <Field>
      <FieldLabel htmlFor={inputProps.name} className="text-foreground font-medium">
        {title}
      </FieldLabel>
      <Input
        id={inputProps.name}
        type={type}
        placeholder={placeholder}
        aria-invalid={!!error}
        className={`
          bg-input border-border text-foreground placeholder:text-muted-foreground
          focus:ring-2 focus:ring-ring focus:border-ring
          ${error ? 'border-destructive focus:ring-destructive focus:border-destructive' : ''}
        `}
        {...inputProps}
      />
      {description && !error && <FieldDescription className="text-muted-foreground">{description}</FieldDescription>}
      {error && <FieldDescription className="text-destructive font-medium">{error}</FieldDescription>}
    </Field>
  )
}
