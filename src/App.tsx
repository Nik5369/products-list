import { Toaster } from '@components/ui'
import { cn } from '@lib/utils'
import { RouterProvider } from '@providers/RouterProvider'

function App() {
  return (
    <div className={cn('bg-background-secondary h-screen overflow-hidden')}>
      <RouterProvider />
      <Toaster />
    </div>
  )
}

export default App
