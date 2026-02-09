import { Toaster } from '@components/ui'
import { cn } from '@lib/utils'
import { ProductsPage } from '@pages'

function App() {
  return (
    <div className={cn('bg-background-secondary h-screen overflow-hidden')}>
      <ProductsPage />
      <Toaster />
    </div>
  )
}

export default App
