import { Button, FormInput } from '@components/ui'
import { useAppDispatch, useAppSelector } from '@hooks'
import { ROUTE_PATHS } from '@providers/RouterProvider'
import { loginThunk, getIsAuth, getUserIsLoading } from '@slices/userSlice'
import type { FC } from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

type TAuthForm = {
  login: string
  password: string
  remember: boolean
}

export const AuthPage: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const isAuth = useAppSelector(getIsAuth)
  const isLoading = useAppSelector(getUserIsLoading)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TAuthForm>({
    mode: 'onChange',
    defaultValues: {
      login: '',
      password: '',
      remember: false,
    },
  })

  useEffect(() => {
    if (isAuth) {
      navigate(ROUTE_PATHS.products, { replace: true })
    }
  }, [isAuth, navigate])

  const handleSubmitForm = async (data: TAuthForm) => {
    try {
      await dispatch(loginThunk(data)).unwrap()
      toast.success('Вы успешно вошли', { position: 'bottom-center' })
    } catch (error) {
      const message = typeof error === 'string' ? error : 'Ошибка авторизации'
      toast.error(message, { position: 'bottom-center' })
    }
  }

  return (
    <div className="min-h-screen bg-muted flex items-center justify-center">
      <div className="bg-background rounded-2xl shadow-sm px-12 py-10 w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold mb-2">Добро пожаловать!</h1>
          <p className="text-muted-foreground text-sm">Пожалуйста, авторизируйтесь</p>
        </div>

        <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-5">
          <FormInput
            title="Логин"
            description="Введите ваш логин"
            placeholder="Например: user@example.com"
            {...register('login', {
              required: 'Логин обязателен',
              minLength: {
                value: 3,
                message: 'Минимум 3 символа',
              },
            })}
            error={errors.login?.message}
          />

          <FormInput
            title="Пароль"
            description="Введите ваш пароль"
            placeholder="Пароль"
            type="password"
            {...register('password', {
              required: 'Пароль обязателен',
              minLength: {
                value: 6,
                message: 'Минимум 6 символов',
              },
            })}
            error={errors.password?.message}
          />

          <div className="flex items-center justify-between pt-1">
            <label
              className="flex items-center gap-2 cursor-pointer select-none text-sm text-muted-foreground"
              tabIndex={0}
              aria-label="Запомнить данные"
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  ;(event.currentTarget.querySelector('input[type="checkbox"]') as HTMLInputElement | null)?.click()
                }
              }}
            >
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-input text-primary focus:ring-2 focus:ring-primary/50"
                {...register('remember')}
              />
              <span>Запомнить данные</span>
            </label>

            <button
              type="button"
              className="text-sm text-primary hover:underline"
              aria-label="Восстановить пароль"
            >
              Забыли пароль?
            </button>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary/90 text-primary-foreground py-2.5 px-4 rounded-lg hover:bg-primary transition-opacity font-medium disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            disabled={!isValid || isLoading}
          >
            {isLoading ? 'Вход...' : 'Войти'}
          </Button>
        </form>

        <div className="mt-6 flex flex-col items-center gap-2 text-sm text-muted-foreground">
          <span>или</span>
          <button
            type="button"
            className="text-primary hover:underline"
            aria-label="Создать новый аккаунт"
          >
            Нет аккаунта? Создать
          </button>
        </div>
      </div>
    </div>
  )
}

