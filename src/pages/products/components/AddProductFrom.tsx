import { Button, FormInput } from '@components/ui'
import { DialogClose } from '@components/ui/'
import type { FC } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

type TProductForm = {
  title: string
  brand: string
  price: number
  sku: string
}

export const AddProductForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TProductForm>({
    mode: 'onChange',
    defaultValues: {
      title: '',
      brand: '',
      price: 0,
      sku: '',
    },
  })

  const onSubmit = (data: TProductForm) => {
    toast.success('Товар успешно создан', { position: 'bottom-center' })
    console.log('Form data:', data)
  }

  const watchedFields = watch()

  const isFormFilled =
    watchedFields.title.trim() !== '' && watchedFields.brand.trim() !== '' && watchedFields.price > 0 && watchedFields.sku.trim() !== ''

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormInput
        title="Название продукта"
        description="Введите название товара"
        placeholder="Например: iPhone 15 Pro"
        {...register('title', {
          required: 'Название обязательно',
          minLength: {
            value: 3,
            message: 'Минимум 3 символа',
          },
          maxLength: {
            value: 100,
            message: 'Максимум 100 символов',
          },
        })}
        error={errors.title?.message}
      />
      <FormInput
        title="Бренд"
        description="Укажите производителя"
        placeholder="Например: Apple"
        {...register('brand', {
          required: 'Бренд обязателен',
          minLength: {
            value: 2,
            message: 'Минимум 2 символа',
          },
        })}
        error={errors.brand?.message}
      />
      <FormInput
        title="Цена"
        description="Укажите цену в рублях"
        placeholder="0"
        type="number"
        {...register('price', {
          required: 'Цена обязательна',
          min: {
            value: 0.01,
            message: 'Цена должна быть больше 0',
          },
          valueAsNumber: true,
        })}
        error={errors.price?.message}
      />
      <FormInput
        title="SKU"
        description="Артикул товара (уникальный код)"
        placeholder="Например: IPH15-PRO-256"
        {...register('sku', {
          required: 'SKU обязателен',
          pattern: {
            value: /^[A-Z0-9-]+$/,
            message: 'SKU может содержать только заглавные буквы, цифры и дефисы',
          },
          minLength: {
            value: 3,
            message: 'Минимум 3 символа',
          },
        })}
        error={errors.sku?.message}
      />
      <DialogClose asChild>
        <Button
          type="submit"
          className="w-full bg-primary/80 text-primary-foreground py-2.5 px-4 rounded-lg hover:bg-primary transition-opacity font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!!Object.values(errors).length || !isFormFilled}
        >
          Добавить продукт
        </Button>
      </DialogClose>
    </form>
  )
}
